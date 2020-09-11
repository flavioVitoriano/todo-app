from typing import List, Optional

from pydantic import BaseModel


class Token(BaseModel):
    access_token: str
    token_type: str


class TokenData(BaseModel):
    email: Optional[str] = None


class TokenAuth(BaseModel):
    email: str
    password: str


class TodoBase(BaseModel):
    title: str
    description: Optional[str] = None


class TodoCreate(TodoBase):
    pass


class Todo(TodoBase):
    id: int
    owner_id: int

    class Config:
        orm_mode = True


class UserBase(BaseModel):
    email: str


class UserCreate(UserBase):
    password: str


class User(UserBase):
    id: int
    is_active: bool
    todos: List[Todo] = []
    hashed_password: str

    class Config:
        orm_mode = True
