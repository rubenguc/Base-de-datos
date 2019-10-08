import React from "react";
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";


const currencies = [
  {
    value: "Garantia",
    label: "Garantia"
  }
];


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper
  },
  toolbar: {
    flexWrap: "wrap"
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`
  },
  link: {
    margin: theme.spacing(1, 1.5)
  },
  tabs: {
    position: "right"
  },
  title: {
    flexGrow: 1
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
    alignItems: 'center',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 500
  },
  falla: {
    marginTop: theme.spacing(6),
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    marginBottom: theme.spacing(4),
    width: 800,
  },
  formControl: {
    margin: theme.spacing(1)
  },
  labelRoot: {
    minWidth: 400,
    fontSize: 15,
    width: 700,
    marginTop: theme.spacing(-3),
    marginBottom: theme.spacing(-3),
  },
  button: {
    margin: theme.spacing(1)
  },
  input: {
    display: "none"
  },
  paper: {
    marginTop: theme.spacing(1),
    marginLeft: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'left',
  },
});


export default class Form extends React.Component {
  
  state = { 
    nombre: "",
    email: "",
    telefono: "",
    tema :"",
    nroFactura :"",
    nroGarantia :"",
    detalle:""
  }

onResetClick(e) {
    e.preventDefault();
    this.setState(this.state);
}

change = e => {
  this.setState({
    [e.target.name]: e.target.value
  })
}

onSubmit = (e) => {
  e.preventDefault();
  this.props.onSubmit(this.state);
  this.setState({     
    nombre: "",
    email: "",
    telefono: "",
    tema :"",
    nroFactura :"",
    nroGarantia :"",
    detalle:""
  });
};

const classes = useStyles();

render() {
  return(

    <form> 
      <Typography variant="h6">
        Rellene el formulario para abrir un ticket nuevo
    </Typography> 
        
        <Grid container spacing={2}>

<Grid item xs={12}>
<TextField
        name="nombre" 
        label="Nombre"
        className={classes.textField}
        margin="dense"
        value={this.state.nombre} 
        onChange={e => this.change(e)}/>
</Grid>

<Grid item xs={12}>
<TextField
        name="email" 
        label="Email"
        margin="dense"
        value={this.state.email} 
        onChange={e => this.change(e)}/>
</Grid>

<Grid item xs={12}>
<TextField
        name="telefono" 
        label="Telefono"
        margin="dense"
        type="number"
        value={this.state.telefono} 
        onChange={e => this.change(e)}/>
</Grid>

<Grid item xs={12}>
  <TextField
            name="tema"
            select
            label="Tema de ayuda"
            margin="dense"
            fullWidth="true"
            value={this.state.tema}
            onChange={e => this.change(e)}            
          >
            {currencies.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>

<Grid item xs={12}>
<TextField
        name="nroFactura" 
        label="Nro. Factura"
        margin="dense"
        type="number"
        value={this.state.nroFactura} 
        onChange={e => this.change(e)}/>
</Grid>

<Grid item xs={12}>
<TextField
        name="nroGarantia" 
        label="Nro. Garantia"
        margin="dense"
        type="number"
        value={this.state.nroGarantia} 
        onChange={e => this.change(e)}/>
</Grid>

<Grid item xs={16}>
          <TextField
            name ="detalle"
            label={"aaa"}
            fullWidth="true"
            multiline
            MaxRows={3}
            margin="dense"
            value={this.state.detalle} 
        onChange={e => this.change(e)}
          />
        </Grid>

<Grid item xs={12} sm={2}>
      <Button
            variant="contained"
            color="primary"
            onClick={e => this.onSubmit(e)}>
            Enviar Ticket
          </Button>
</Grid>

    <Grid item xs={12} sm={2}>
      <Button
            variant="contained"
            color="secondary"
            onClick={e => this.onResetClick(e)}>
            Restablecer
          </Button>
          </Grid>   

          </Grid>
    </form>
    ); 
  }
}