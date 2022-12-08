
import express from 'express';
import minimist from 'minimist';
// import functions
import { add, subtract, multiply, divide, getSin, getCos, getTanFromRadians, getTanFromDegrees, exponentiation, getLog, getLogFromDifferentBase, getSqaureRoot, getCubeRoot, deriv, nthDeriv} from './lib/calculator.js';

//add database

const args = minimist(process.argv.slice(2));
const app = express();
app.use(express.urlencoded({ extended: true }))

const port = args.port || 5000;

app.get('/app/', (req, res) => {
  res.send('200 OK');
});

  // add functionality
  app.get('/app/add/', (req,res)=>{
    const n1 = args.n1
    const n2 = args.n2
    //check if input is valid numbers
    if (isNaN(n1) && isNaN(n2)){
      //send error code if it is not valid numbers
        res.status(500)
        res.send('There is an error occured when entering numbers')
    } else {
      if (Number.MIN_SAFE_INTEGER <= n1 <= Number.MAX_SAFE_INTEGER && Number.MIN_SAFE_INTEGER <= n2 <= Number.MAX_SAFE_INTEGER){
      res.send(add(n1,n2).toString());
      }
    }
  })

  //subtract functionality
  app.get('/app/subtract', (req,res)=>{
    const n1 = args.n1
    const n2 = args.n2
    if (isNaN(n1) && isNaN(n2)){
        res.status(500)
        res.send('There is an error occured when entering numbers')
    } else {
      if (Number.MIN_SAFE_INTEGER <= n1 <= Number.MAX_SAFE_INTEGER && Number.MIN_SAFE_INTEGER <= n2 <= Number.MAX_SAFE_INTEGER){
      res.send(subtract(n1,n2).toString());
      }
    }
  })

  //multiply functionality
  app.get('/app/multiply', (req,res)=>{
    const n1 = args.n1
    const n2 = args.n2
    if (isNaN(n1) && isNaN(n2)){
        res.status(500)
        res.send('There is an error occured when entering numbers')
    } else {
      if (Number.MIN_SAFE_INTEGER <= n1 <= Number.MAX_SAFE_INTEGER && Number.MIN_SAFE_INTEGER <= n2 <= Number.MAX_SAFE_INTEGER){
      res.send(multiply(n1,n2).toString());
      }
    }
  })

  //division functionality
  app.get('/app/divide', (req,res)=>{
    const n1 = args.n1
    const n2 = args.n2
    if (isNaN(n1) && isNaN(n2)){
        res.status(500)
        res.send('There is an error occured when entering numbers')
    } else {
      if (Number.MIN_SAFE_INTEGER <= n1 <= Number.MAX_SAFE_INTEGER && Number.MIN_SAFE_INTEGER <= n2 <= Number.MAX_SAFE_INTEGER){
      res.send(divide(n1,n2).toString());
      }
    }
  })

  //get sine by entering radians and radius
  app.get('/app/getSin/', (req,res)=>{
    const radians = args.radians
    const radius = args.radius
    if (isNaN(radians) && isNaN(radius)){
        res.status(500)
        res.send('There is an error occured when entering numbers')
    } else {
      if (-1 <= radians <= 1 && Number.MIN_SAFE_INTEGER <= radius <= Number.MAX_SAFE_INTEGER){
      res.send(getSin(radians,radius).toString());
      }
    }
  })

  //get cosine by entering radians and radius
  app.get('/app/getCos/', (req,res)=>{
    const radians = args.radians
    const radius = args.randius
    if (isNaN(radians) && isNaN(radius)){
        res.status(500)
        res.send('There is an error occured when entering numbers')
    } else {
      if (-1 <= radians <= 1 && Number.MIN_SAFE_INTEGER <= radius <= Number.MAX_SAFE_INTEGER){
      res.send(getCos(radians,radius).toString());
      }
    }
  })

  //get tangent by entering radians
  app.get('/app/getTanFromRadians/', (req,res)=>{
    const radians = args.radians
    if (isNaN(radians)){
        res.status(500)
        res.send('There is an error occured when entering numbers')
    } else {
      res.send(getTanFromRadians(radians).toString());
    }
  })

  //get tangent by entering degrees
  app.get('/app/getTanFromDegrees/', (req,res)=>{
    const degree = args.degree
    if (isNaN(degree)){
        res.status(500)
        res.send('There is an error occured when entering numbers')
    } else {
      if (-360 <= degree <= 360){
      res.send(getTanFromDegrees(degree).toString());
      }
    }
  })

  //exponentiation functionality
  app.get('/app/exponentiation/', (req,res)=>{
    const n1 = args.n1
    const n2 = args.n2
    if (isNaN(n1) && isNaN(n2)){
        res.status(500)
        res.send('There is an error occured when entering numbers')
    } else {
      if (Number.MIN_SAFE_INTEGER <= n1 <= Number.MAX_SAFE_INTEGER && Number.MIN_SAFE_INTEGER <= n2 <= Number.MAX_SAFE_INTEGER){
      res.send(exponentiation(n1,n2).toString());
      }
    }
  })

  // calculating log
  app.get('/app/getLog/', (req,res)=>{
    const log = args.n1
    if (isNaN(log)){
        res.status(500)
        res.send('There is an error occured when entering numbers')
    } else {
      if(log == 0){
        res.send('Negative Infinity');
      } else if (log > 0){
        res.send(getLog(log).toString());
      }
    }
  })

  // calculating log from different bases
  app.get('/app/getLogFromDifferentBase/', (req,res)=>{
    const log = args.n1
    const base = args.n2
    if (isNaN(log) && isNaN(base)){
        res.status(500)
        res.send('There is an error occured when entering numbers')
    } else {
      if(log == 0){
        res.send('Negative Infinity');
      } else if (log > 0){
        res.send(getLogFromDifferentBase(log, base).toString());
      }
    }
  })

  // calculating sqaure root
  app.get('/app/getSqaureRoot/', (req,res)=>{
    const n1 = args.n1
    if (isNaN(n1)){
        res.status(500)
        res.send('There is an error occured when entering numbers')
    } else {
      if (Number.MIN_SAFE_INTEGER <= n1 <= Number.MAX_SAFE_INTEGER){
        res.send(getSqaureRoot(n1).toString());
        }
    }
  })

  // calculating cube root
  app.get('/app/getCubeRoot/', (req,res)=>{
    const n1 = args.n1
    if (isNaN(n1)){
        res.status(500)
        res.send('There is an error occured when entering numbers')
    } else {
      if (Number.MIN_SAFE_INTEGER <= n1 <= Number.MAX_SAFE_INTEGER){          
        res.send(getCubeRoot(n1).toString());
      }
    }
  })

  // calculating derivative
  app.get('/app/deriv/', (req,res)=>{
    const n1 = args.n1
    const power = args.power
    if (isNaN(n1) && isNaN(power)){
      res.status(500)
      res.send('There is an error occured when entering numbers')
  } else {
      res.send(deriv(n1, power).toString());
    }
  })

  // calculating nth derivative
  app.get('/app/nthDeriv/', (req,res)=>{
    const n1 = args.n1
    const x1 = args.x1
    const func = args.func
    if (isNaN(n1) && isNaN(x1)){
      res.status(500)
      res.send('There is an error occured when entering numbers')
  } else {
      res.send(nthDeriv(n1, x1, func).toString());
    }
  })

  // return 404 NOT FOUND if have wrong or unavaiable endpoint
  app.get("*", (req, res) => {
    res.status(404).send("404 NOT FOUND");
  });

  app.listen(port);

