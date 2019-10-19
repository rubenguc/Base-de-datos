import React, { useState} from "react";
import axios from "axios";

import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

const currencies = [
  {
    value: "Garantia",
    label: "Garantia"
  },

  { value: "Otro", label: "Otro" }
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
    alignItems: "center"
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
    width: 800
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
    display: "block",
    transformOrigin: "top left"
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
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "green"
  },
  card: {
    minWidth: 275,
    backgroundColor: "#fafafa"
  }
}));

function refreshPage() {
  window.location.reload(false);
}

export default function FormTicket(props) {
  const [values, setValues] = useState({
    nombre: "",
    email: "",
    tema: "",
    telefono: "",
    nroFactura: 0,
    nroGarantia: 0,
    detalleFalla: "",
    //falta imagenes
    v: '1'
  });


  const handleReset = () => {
    setValues({
      nombre: '',
      email: "",
      tema: "",
      telefono: "",
      nroFactura: 0,
      nroGarantia: 0,
      detalleFalla: "" 
    })
  };
  

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };
  
  const handleSubmit = e => {
    e.preventDefault();
    console.log(values);
    axios.post("http://localhost:3001/api/ticket",
    {nombrecontacto: values.nombre,
     correocontacto: values.email, telefonocontacto: values.telefono,
     temaayuda: values.tema, nrofactura: values.nroFactura,
     nrogaranta: values.nroGarantia, detallefalla: values.detalleFalla })
      .then(res => {
        console.log('guardado exitosamente')
        
      })
      handleReset(); 
  };

  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h6">
          Rellene el formulario para abrir un ticket nuevo
        </Typography>
        <form
          className={classes.form}
          onSubmit={handleSubmit}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                required
                id="standard-required"
                label="Nombre de la persona de contacto para efectos de la garantia:"
                className={classes.textField}
                margin="normal"
                value={values.nombre}
                onChange={handleChange("nombre")}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                required
                name="email"
                id="standard-required"
                label="Email"
                className={classes.textField}
                margin="normal"
                value={values.email}
                onChange={handleChange("email")}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                required
                name="telefono"
                id="standard-required"
                label="Telefono"
                margin="normal"
                className={classes.textField}
                value={values.telefono}
                onChange={handleChange("telefono")}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                id="standard-select-currency"
                select
                label="Tema de ayuda"
                margin="normal"
                className={classes.textField}
                value={values.tema}
                onChange={handleChange("tema")}
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
                required
                name="nroFactura"
                id="standard-required"
                label="Nro. Factura"
                margin="normal"
                className={classes.textField}
                value={values.nroFactura}
                onChange={handleChange("nroFactura")}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                required
                name="nroGarantia"
                id="standard-required"
                label="Nro. Garantia"
                margin="normal"
                className={classes.textField}
                value={values.nroGarantia}
                onChange={handleChange("nroGarantia")}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                id="standard-textarea"
                name="detalleFalla"
                label={`Detalle de la falla: Describa la falla e indique la cédula, rif y 
              nombre que aparece en la factura, modelo del producto y 
              estado del país donde se encuentra`}
                InputLabelProps={{
                  classes: {
                    root: classes.labelRoot
                  }
                }}
                className={classes.falla}
                margin="normal"
                value={values.detalleFalla}
                onChange={handleChange("detalleFalla")}
              />
            </Grid>

            <Grid item xs={12} sm={4}>
              <Button
                type="submit"
                value="Submit"
                variant="contained"
                color="primary"
                className={classes.button}
                onClick={refreshPage}
              >
                Enviar Ticket
              </Button>
            </Grid>

            <Grid item xs={12} sm={4}>
              <Button
                type="reset"
                name="Reset"
                variant="contained"
                color="secondary"
                className={classes.button}
                value={values}
                onClick={handleReset}
              >
                Restablecer
              </Button>
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </Card>
  );
}
