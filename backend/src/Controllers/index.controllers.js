const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    password: 'java',
    database : 'SistemaGarantia',
    port: '5432'
})


const getDatos = async (req, res) => {
    const response = await pool.query('select idticket, fechacreado, fechaactualizado,estatus,departamento from Ticket');
    res.status(200).json(response.rows);
};
const CrearDatos = async (req, res) => {
    const {nombrecontacto, correocontacto, telefonocontacto, temaayuda, nrofactura, nrogaranta, detallefalla} = req.body;
    const id = await pool.query('select max(idticket)+1 as nuevoId from Ticket')
    const fechacreado = await pool.query('select current_date')
    const response = await pool.query(`insert into Ticket (idticket, clientecedula, nombrecontacto, correocontacto, telefonocontacto, temaayuda, nrofactura, nrogaranta, detallefalla, fechacreado, departamento, estatus ) values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)`, [id.rows[0].nuevoid, '25147289', nombrecontacto, correocontacto, telefonocontacto, temaayuda, nrofactura, nrogaranta, detallefalla, fechacreado.rows[0].current_date,'1', 'A']);
    res.json({
        message: 'Ticket Agregado con Exito',
        body: {
            dato: {nombrecontacto, correocontacto, telefonocontacto, temaayuda, nrofactura, nrogaranta, detallefalla, fechacreado}
        }
    })
}

module.exports = {
    getDatos,
    CrearDatos
}