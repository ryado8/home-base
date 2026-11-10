# Home Base's database connection: the one place the backend logs into Supabase.
# The credentials come from backend/.env, never from this file.
import os
from dotenv import load_dotenv
from sqlmodel import create_engine, Session, text, SQLModel, Field
from pydantic import AwareDatetime

load_dotenv()

DATABASE_URL = os.getenv("DATABASE_URL")

if not DATABASE_URL:
    raise ValueError("DATABASE_URL environment variable is missing!")

engine = create_engine(DATABASE_URL, echo=True)

def count_locations() -> int:
    with Session(engine) as session:
        statement = text("SELECT COUNT(*) FROM locations")
        return session.exec(statement).scalar_one()

class Location(SQLModel, table=True):
    __tablename__= "locations"
    id: int | None = Field(default=None, primary_key=True)
    who: str
    latitude: float
    longitude: float
    reported_at: AwareDatetime

if __name__ =="__main__":
    print(count_locations())