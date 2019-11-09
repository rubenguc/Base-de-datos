const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    password: 'java',
    database : 'SistemaGarantia',
    port: '5432'
})


const getDatos = async (req, res) => {
    const response = await pool.query(`select idticket, to_char(fechacreado,'dd/mm/yyyy') as "fechacreado", to_char(fechaactualizado,'dd/mm/yyyy - HH24:MI:SS') as "fechaactualizado",estatus,departamento, asunto from Ticket`);
    console.log(response)
    res.status(200).json(response.rows);
};
const CrearDatos = async (req, res) => {
    const {nombrecontacto, correocontacto, telefonocontacto, temaayuda, nrofactura, nrogaranta, detallefalla} = req.body;
    const id = await pool.query('select max(idticket)+1 as nuevoId from Ticket')
    if(!id) id = 1
    console.log(id.rows[0].nuevoid)
    const fechacreado = await pool.query('select current_date')
    const response = await pool.query(`insert into Ticket (idticket, clientecedula, nombrecontacto, correocontacto, telefonocontacto, temaayuda, nrofactura, nrogaranta, detallefalla, fechacreado, departamento, estatus, asunto ) values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)`, [id.rows[0].nuevoid, '25147289', nombrecontacto, correocontacto, telefonocontacto, temaayuda, nrofactura, nrogaranta, detallefalla, fechacreado.rows[0].current_date,'Garantias', 'Activo', '23361']);
    res.json({
        message: 'Ticket Agregado con Exito',
        body: {
            dato: {id,nombrecontacto, correocontacto, telefonocontacto, temaayuda, nrofactura, nrogaranta, detallefalla, fechacreado}
        }
    })
}

module.exports = {
    getDatos,
    CrearDatos
}