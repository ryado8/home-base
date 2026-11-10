# Home Base's backend: the server the family's phones send their locations to.

from fastapi import FastAPI
from pydantic import BaseModel, Field, field_validator, AwareDatetime
from db import Location, engine
from sqlmodel import Session

NAMES = ['Ryan', 'Dad', 'Mom']

class LocationReport(BaseModel):
    who: str
    latitude: float = Field(ge= -90, le= 90)
    longitude: float = Field(ge = -180, le = 180)
    time: AwareDatetime

    @field_validator("who")
    @classmethod
    def validate_name(cls, name: str) -> str:
        if name not in NAMES:
            raise ValueError(f"{name} must be one of {NAMES}")
        return name

app = FastAPI()

@app.get("/")
def home():
    return "Hello, this is Home Base's backend."

@app.post("/locations", status_code = 201)
def create_location(location: LocationReport):
    location1 = Location(who=location.who, latitude=location.latitude, longitude=location.longitude, reported_at=location.time)

    with Session(engine) as session:
        session.add(location1)
        session.commit()
        session.refresh(location1)

    return location1