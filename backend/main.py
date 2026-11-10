# Home Base's backend: the server the family's phones send their locations to.

from fastapi import FastAPI
from pydantic import BaseModel
from datetime import datetime

class LocationReport(BaseModel):
    who: str
    latitude: float
    longitude: float
    time: datetime

app = FastAPI()

@app.get("/")
def home():
    return "Hello, this is Home Base's backend."