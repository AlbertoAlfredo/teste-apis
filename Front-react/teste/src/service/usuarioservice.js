import axios from "axios";



export default class UsuariosService{
  url = "http://localhost:8000"
    getUsuarios() {
      console.log(fetch(this.url+"/usuario").then(res => res.json()).then(d => d))
		  return fetch(this.url+"/usuario").then(res => res.json()).then(d => d);
    }
    getUsuario(id) {
      console.log(fetch(this.url+"/usuario/?id="+id).then(res => res.json()).then(d => d))
		  return fetch(this.url+"/usuario/?id="+id).then(res => res.json()).then(d => d);
    }
    deletUsuario(id){
      return
    }
    createUsuario(nome, cpf){
      console.log(nome, cpf)
      return axios({
        method: 'put',
        url: this.url+'/usuario',
        data: {
          'nome': nome,
          'cpf': cpf
        }
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    }
}