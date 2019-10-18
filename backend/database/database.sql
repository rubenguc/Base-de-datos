create database SistemaGarantia;

CREATE TABLE Ticket (
  idTicket         SERIAL NOT NULL,
  Clientecedula    varchar(8) NOT NULL,
  nombreContacto   varchar(20) NOT NULL,
  correoContacto   varchar(50) NOT NULL,
  telefonoContacto varchar(11) NOT NULL, 
  Temaayuda        varchar(30) NOT NULL,
  nroFactura       int4 NOT NULL,
  nroGaranta       int4 NOT NULL,
  detalleFalla     varchar(500) NOT NULL,
  fechaCreado      date NOT NULL,
  fechaActualizado date,
  Departamento     int4 NOT NULL,
  estatus          varchar(1) NOT NULL,
  PRIMARY KEY (idTicket));

INSERT INTO public.ticket(
	idticket, clientecedula, nombrecontacto, correocontacto, telefonocontacto, temaayuda, nrofactura, nrogaranta, detallefalla, fechacreado, fechaactualizado, departamento, estatus)
	VALUES (1, '25138768','Alejandro','alejandrovalencia@gmail.com','04145094134','monto fact. incorrecto', 1, 1, 'factura con errores', '2019/10/12', '2019/10/13', 1, 1);


INSERT INTO public.ticket(
	idticket, clientecedula, nombrecontacto, correocontacto, telefonocontacto, temaayuda, nrofactura, nrogaranta, detallefalla, fechacreado, fechaactualizado, departamento, estatus)
	VALUES (1, '25138768','Alejandro','alejandrovalencia@gmail.com','04145094134','monto fact. incorrecto', 1, 1, 'factura con errores', '2019/10/12', '2019/10/13', 1, 1);

INSERT INTO public.ticket(
	idticket, clientecedula, nombrecontacto, correocontacto, telefonocontacto, temaayuda, nrofactura, nrogaranta, detallefalla, fechacreado, fechaactualizado, departamento, estatus)
	VALUES (3, '24055132','Carlos','carloslaperrita@gmail.com','04124224563','no hay catalinas', 3, 3, 'catalinas muy caras', '2019/9/05', '2019/9/07', 3, 1);	