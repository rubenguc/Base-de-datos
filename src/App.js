import React, { Component, Fragment } from "react";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Header from "./Componentes/Header";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import FormTicket from "./Componentes/FormTicket";
import TablaTicket from "./Componentes/TablaTicket";

import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`
  };
}

export default class App extends Component {
  state = {
    //data: [],
    pos: 0
  };

  onSubmit = fields => {
    //this.setState({ data: fields });
  };

  handleChange = (event, newValue) => {
    this.setState({ pos: newValue });
  };
  render() {
    return (
      <Fragment>
        <MuiThemeProvider>
          <Header />
          <Paper>
            <Tabs
              value={this.state.pos}
              onChange={this.handleChange}
              aria-label="simple tabs example"
              indicatorColor="primary"
              textColor="primary"
              centered
            >
              <Tab label="Formulario de Inclusión" {...a11yProps(0)} />
              <Tab label="Reporte de Tickets" {...a11yProps(1)} />
            </Tabs>
          </Paper>

          <TabPanel value={this.state.pos} index={0}>
            {/*Panel del formulario */}
            <FormTicket
              onSubmit={submission =>
                this.setState({
                  //data: [...this.state.data, submission]
                })
              }
            />
          </TabPanel>
          <TabPanel value={this.state.pos} index={1}>
            {/* Panel de la tabla */}
            <p>{JSON.stringify(this.state.fields, null, 2)}</p>
            <TablaTicket
              
              header={[
                { name: "#Ticket", prop: "idticket"},

                { name: "F.Creado", prop: "fechacreado"},

                { name: "F.Actualizado", prop: "fechaactualizado"},

                { name: "Estatus", prop: "estatus"},

                { name: "Departamento", prop: "departamento"}
              ]}
            />
          </TabPanel>
        </MuiThemeProvider>
      </Fragment>
    );
  }
}
