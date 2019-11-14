const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const morgan = require('morgan');
//Iniciando o App
const app = express();
const port = process.env.PORT || 2445;

app.use(morgan('dev'));
app.use(express.json());
app.use(cors());
//Iniciando o BD
mongoose.connect(
    // 'mongodb://10.0.75.1:27017/nodeapi',
    'mongodb+srv://dimitri:7895123698@cluster0-fzhvj.mongodb.net/api-node?retryWrites=true&w=majority',
    { useNewUrlParser: true }
);
requireDir('./src/models');

// const Product = mongoose.model('Product');

//Rotas
app.use('/api', require('./src/routes'));

app.listen(port, (err) => {
    try {
        console.log(`[SERVER] API online! On Port ${port}\nLink: http://localhost:${port}`)
    } catch (err) {
        console.log(`[SERVER] API Offiline! Failed...`)
    }
});
