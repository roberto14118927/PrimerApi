const Pool = require('pg').Pool

const pool = new Pool({
    user: 'user_db',
    host: 'host_db',
    database: 'name_db',
    password: 'password_db',
    port: 5432,
    timezone: 'utc'
});



// Lectura de un servicio
const getUser = (request, response) => {
    pool.query('SELECT * FROM name_table ORDER BY id ASC', (error, result) => {
        if (error) {
            console.log(error);
        }
        response.status(200).json(result.rows)
    })
}

// Escritura de un servicio
const createUser = (request, response) => {
    const { name1, year1 } = request.body
    pool.query('INSERT INTO user (name, year) VALUES  ($1, $2)', [name1, year1], (error, result) => {
        if (error) {
            console.log(error);
        }
        response.status(201).json(result.rows)
    })
}

// Escritura de un servicio
const updateUser = (request, response) => {
    const { name1, year1, id } = request.body
    pool.query('UPDATE user SET name = $1, year = $2 WHERE id = $3', [name1, year1, id], (error, result) => {
        if (error) {
            console.log(error);
        }
        response.status(201).json(result.rows)
    })
}

// Escritura de un servicio
const deleteUser = (request, response) => {
    const { id } = request.body
    pool.query('DELETE FROM user WHERE id = $1', [id], (error, result) => {
        if (error) {
            console.log(error);
        }
        response.status(201).json(result.rows)
    })
}


module.exports = {
    getUser,
    createUser,
    updateUser,
    deleteUser,
}








