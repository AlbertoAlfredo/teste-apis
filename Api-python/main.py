from fastapi import FastAPI
from api.consultas import consulta
from fastapi.responses import JSONResponse
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware


api = consulta()
app = FastAPI()

origins = [
    "http://localhost.tiangolo.com",
    "https://localhost.tiangolo.com",
    "http://localhost",
    "http://localhost:8080",
    "http://localhost:8000",
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Usuario(BaseModel):
    nome: str
    cpf: int
    
class Usuario_id(BaseModel):
    user_id: int
    
@app.get("/")
async def root():
    return {"<h1>Bem vindo</h1> <p>Acesse a documentacção em <a href='http://localhost:8000/docs'>Documentação</a></p>"}

@app.get("/usuario/")
async def listar_usuario(id: int = None):
    user = api.listar_usuario(id)
    return JSONResponse(user)


@app.put("/usuario/")
async def criar_usuario(usuario: Usuario):
    return api.criar_usuario(usuario.nome, usuario.cpf)

@app.delete("/usuario/")
async def apagar_usuario(id: Usuario_id):
    return api.apagar_usuario(id.user_id)
    # return id.user_id


