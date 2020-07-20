const express = require('express')
const bodyParser = require('body-parser')
const service = require('./Service/services')

const app = express()
const port = 8000;

app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

app.get('/user', service.getUser);
app.post('/user', service.createUser);
app.put('/user', service.updateUser);
app.delete('/user', service.deleteUser);

app.listen(port, () => {
    console.log(`Servicio ejecutado en el puerto ${port}.`);
})






