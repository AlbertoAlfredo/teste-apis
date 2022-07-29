import sqlite3
import json

conn = sqlite3.connect('./bd/sqlitedb.db')

cursor = conn.cursor()

class consulta():
    
    def listar_usuario(self, id = None):
        if id:
            retorno = cursor.execute(f"SELECT id, nome, cpf FROM usuarios WHERE id={id}").fetchall()
        else:
            retorno = cursor.execute('SELECT id, nome, cpf  FROM usuarios').fetchall()
        lista = []
        for c in retorno:
            dados = { "id": c[0], "nome": c[1], "cpf": c[2]}
            lista.append(dados) 
        return lista
    
    def criar_usuario(self, nome, cpf):
        cursor.execute(f"INSERT INTO usuarios(nome, cpf) VALUES('{nome}', {cpf})")
        return {'message': 'usuario criado'}
    
    def apagar_usuario(self, id):
        cursor.execute(f"DELETE FROM usuarios WHERE id={id}")
        return {'message': 'usuario apagado'}