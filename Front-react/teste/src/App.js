import React  from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import UsuariosService from './service/usuarioservice'
import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
import { Button } from 'primereact/button';



class App extends React.Component {

  usuariosService = new UsuariosService();


  constructor(props) {
    super(props);
    this.state = {
      value: '',
      usuarios: '',
      nome: '',
      cpf: '',
    };
  }

  enviarUsuario(){
    this.usuariosService.createUsuario(this.state.nome, this.state.cpf)
  }

  componentDidMount() {
    this.usuariosService.getUsuarios().then(data => this.setState({ usuarios: data }));
}


  render(){
  return (
      <div>
        <Card title="Cadastro de usuários">

        <span className="p-float-label">
          <h5>Nome</h5>
          <InputText id="nome" value={this.state.nome} onChange={(e) => this.setState({nome: e.target.value})} />
        </span>
        <span className="p-float-label">
          <h5>CPF</h5>
          <InputNumber id="cpf" value={this.state.cpf} onValueChange={(e) => this.setState({cpf: e.value})}  />
        </span>
            <Button label='Enviar' onClick={() => (this.enviarUsuario())} />
        </Card>




        <hr />





          <Card title="Lista de Usuários">
              <DataTable value={this.state.usuarios} responsiveLayout="scroll">
                  <Column field="id" header="Id"></Column>
                  <Column field="nome" header="Nome"></Column>
                  <Column field="cpf" header="CPF"></Column>
              </DataTable>
          </Card>
      </div>
  );
}
}
               

export default App;
