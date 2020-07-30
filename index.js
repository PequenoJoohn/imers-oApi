const jsonServer = require('json-server');

const server = jsonServer.create();
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults();


const cors = require('cors');
const morgan = require('morgan');
//Iniciando o App
const port = process.env.PORT || 8080;

server.use(morgan('short'));
server.use(cors());
server.use(middlewares);
server.use(router);
server.listen(port, () => {

})

server.listen(port, (err) => {
    try {
        console.log(`[SERVER] API online! On Port ${port}\nLink: http://localhost:${port}`)
    } catch (err) {
        console.log(`[SERVER] API Offiline! Failed...`)
    }
});
