
import express from 'express';
import minimist from 'minimist';
// import
import { add, subtract, multiply, divide } from './lib/calculator';


// add morgan to the api
const morgan = require('morgan')
app.use(morgan);

//add database

const args = minimist(process.argv.slice(2));
const app = express();
app.use(express.json); 
app.use(express.urlencoded({ extended: true }))

const port = args.port || 5000;


  app.listen(port);

  app.get('/app/', (req, res) => {
    res.send("200 OK");
  });

  app.get('/app/add', (req,res)=>{
    res.status(200);
    sum = add(req.body.n1, req.body.n2)
    res.send('Sum = ${sum}')    
  })

  app.get('/app/subtract', (req,res)=>{
    res.status(200);
    sum = subtract(req.body.n1, req.body.n2)
    res.send('Sum = ${sum}')    
  })

  app.get('/app/multiply', (req,res)=>{
    res.status(200);
    sum = multiply(req.body.n1, req.body.n2)
    res.send('Sum = ${sum}')    
  })

  app.get('/app/divide', (req,res)=>{
    res.status(200);
    sum = divide(req.body.n1, req.body.n2)
    res.send('Sum = ${sum}')    
  })


  app.get("*", (req, res) => {
    res.status(404).send("404 NOT FOUND");
  });
