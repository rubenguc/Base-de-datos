import React, {Component, Fragment} from 'react';

import Header from './Componentes/Header';
import Menu from './Componentes/Menu';
import FormTicket from './Componentes/FormTicket';
import TablaTicket from './Componentes/TablaTicket';


import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

export default class extends Component {
  state = {
    data: []
  };

  onSubmit = fields => {
    this.setState({ fields });
  };

  render() {
    return  <Fragment>
      <MuiThemeProvider>
        <Header />
        
        <Menu />
        <FormTicket 
            onSubmit={submission =>
              this.setState({
              data: [...this.state.data, submission]})}
              />
        <p>{JSON.stringify(this.state.fields, null, 2)}</p>
        <TablaTicket 
         data={this.state.data}
        header={[
          {name:"Nombre", 
          prop: "nombre"},

          {name:"Email",
          prop: "email"},

          {name: "Telefono",
          prop:"telefono"},

          {name: "Tema de Ayuda",
          prop: "tema"},
          
          {name: "Nro.Factura",
          prop: "nroFactura"},

          {name: "Nro.Garantia",
          prop: "nroGarantia"},

          {name: "Detalle",
            prop: "detalleFalla"}

          
          ]}/>
        
        </MuiThemeProvider>
    </Fragment>
  }
};

