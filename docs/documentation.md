# Math Calculator 

---

## Summary

This project is a simple math calculator which allow users to perform a few different math calculations such as add, subtract, multiple, divide, sine, cosine, tangent from radians and degrees, exponential, log, log with different base, square root, cube root and derivatives.

## Assignment Instruction

1. Git clone the repository of the project into your environment 

```
git@github.com:comp426-2022-fall/a99-group24.git
```

1. In your terminal, run `npm install` to install all the dependencies for the package 
2. In your terminal, use `npm start` to run the package .

## Team Management

Team Members: Xuan Bai, ZiQian Zhao 

**Roles:**

- Front end: Xuan Bai
- Back end: ZiQian Zhao & Xuan Bai
- Database: ZiQian Zhao
- Documentation: ZiQian Zhao & Xuan Bai

## Planning

### Brainstorming

- Generate a math calculator that can perform simple math functions
    - add
    - subtract
    - multiply
    - divide
    - sine
    - cosine
    - tangent from radians and degrees
    - exponential functions
    - log and log with different base
    - square root, cub root
    - derivatives

### Backend

- Create math functions using JavaScript
- Create API endpoints for the server

### Frontend

- brainstorm the design of the user interface
- create login page
- We have wrote the login page and the frontend of the calculator, but it is not connected to the backend which will be connected in the future.

### Database

- Make the database for the endpoints that are used in the server

### General

- Work on the documentation
- Record the video demo

## Dependencies

- better-sqlite3
- express
- minimist

## Files

**Calculator.js**  

It is the backend of the calculator 

**Server.js**

It has all the CRUD API endpoints to perform the functions 

**Database.js**

It creates a SQLite database for the API endpoints in the server

**Index.html**

It is the frontend of the calculator 

**style.css**

A file that format the layout of the index.html

## Endpoints

The endpoints of the server are shown below 

### /app/

Responds “200 OK”

**Response body** 

```
curl -s http://localhost:5000/app/
```

**Output**

```
200 OK
```

### /app/add/

Add function 

**Response body**

```
PORT="$(shuf -i 2000-65535 -n 1)"; (timeout --signal=SIGINT 5 node server.js --port=$PORT --n1 x(first number) --n2 y(second number) ; exit 0) & sleep 1 && curl -s http://localhost:${PORT}/app/add/ && sleep 5
```

**Output**

```
For example n1 = 9 and n2 = 3

The expected output would be 14
```

### /app/subtract/

Subtract function 

**Response body**

```
PORT="$(shuf -i 2000-65535 -n 1)"; (timeout --signal=SIGINT 5 node server.js --port=$PORT --n1 x(first number) --n2 y(second number) ; exit 0) & sleep 1 && curl -s http://localhost:${PORT}/app/subtract/ && sleep 5
```

**Output**

```
For example n1 = 9 and n2 = 3

The expected output would be 6
```

### /app/multiply/

multiply function 

**Response body**
```
PORT="$(shuf -i 2000-65535 -n 1)"; (timeout --signal=SIGINT 5 node server.js --port=$PORT --n1 x(first number) --n2 y(second number) ; exit 0) & sleep 1 && curl -s http://localhost:${PORT}/app/multiply/ && sleep 5
```

**Output**

```
For example n1 = 9 and n2 = 3

The expected output would be 27
```

### /app/divide/

Divide function 

**Response body**

```
PORT="$(shuf -i 2000-65535 -n 1)"; (timeout --signal=SIGINT 5 node server.js --port=$PORT --n1 x(first number) --n2 y(second number) ; exit 0) & sleep 1 && curl -s http://localhost:${PORT}/app/divide/ && sleep 5
```

**Output**
```
For example n1 = 9 and n2 = 3

The expected output would be 3
```

### /app/getSin/

Sine function 

**Response body**

```
PORT="$(shuf -i 2000-65535 -n 1)"; (timeout --signal=SIGINT 5 node server.js --port=$PORT --radians x(radians) ; exit 0) & sleep 1 && curl -s http://localhost:${PORT}/app/getSin/ && sleep 5
```

**Output**

```
For example radians = 1

The expected output would be 0.8414709848078965
```

### /app/getCos/

Cosine function 

**Response body**

```
PORT="$(shuf -i 2000-65535 -n 1)"; (timeout --signal=SIGINT 5 node server.js --port=$PORT --radians x(radians) ; exit 0) & sleep 1 && curl -s http://localhost:${PORT}/app/getCos/ && sleep 5
```

**Output**

```
For example radians = 1

The expected output would be 0.54030230586
```

### /app/getTanFromRadians/

get tangent from radians function 

**Response body**

```
PORT="$(shuf -i 2000-65535 -n 1)"; (timeout --signal=SIGINT 5 node server.js --port=$PORT --radians x(radians) ; exit 0) & sleep 1 && curl -s http://localhost:${PORT}/app/getTanFromRadians/ && sleep 5
```

**Output**

```
For example radians = 1

The expected output would be 57.2958
```

### /app/getTanFromDegrees/

get tangent from degrees function 

**Response body**

```
PORT="$(shuf -i 2000-65535 -n 1)"; (timeout --signal=SIGINT 5 node server.js --port=$PORT --degree x(degree) ; exit 0) & sleep 1 && curl -s http://localhost:${PORT}/app/getTanFromDegrees/ && sleep 5
```

**Output**

```
For example degree = 45

The expected output would be 0.9999999999999999
```

### /app/exponentiation/

exponential function 

**Response body**

```
PORT="$(shuf -i 2000-65535 -n 1)"; (timeout --signal=SIGINT 5 node server.js --port=$PORT --n1 x(first number) --n2 y(power) ; exit 0) & sleep 1 && curl -s http://localhost:${PORT}/app/exponentiation/ && sleep 5
```

**Output**

```
For example n1 = 9 and n2 = 3

The expected output would be 729
```

### /app/getlog/

logarithm function 

**Response body**

```
PORT="$(shuf -i 2000-65535 -n 1)"; (timeout --signal=SIGINT 5 node server.js --port=$PORT --n1 x(number) ; exit 0) & sleep 1 && curl -s http://localhost:${PORT}/app/getlog/ && sleep 5
```

**Output**

```
For example n1 = 2

The expected output would be 0.30102999566
```

### /app/getLogFromDifferentBase/

Logarithm with different base function 

**Response body**

```
PORT="$(shuf -i 2000-65535 -n 1)"; (timeout --signal=SIGINT 5 node server.js --port=$PORT --n1 x(number) --n2 y(base) ; exit 0) & sleep 1 && curl -s http://localhost:${PORT}/app/getLogFromDifferentBase/ && sleep 5
```

**Output**

```
For example n1 = 3, n2 = 7

The expected output would be 0.5645750341
```

### /app/getSquareRoot/

Square root function 

**Response body**

```
PORT="$(shuf -i 2000-65535 -n 1)"; (timeout --signal=SIGINT 5 node server.js --port=$PORT --n1 x(number) ; exit 0) & sleep 1 && curl -s http://localhost:${PORT}/app/getSquareRoot/ && sleep 5
```

**Output**

```
For example n1 = 4

The expected output would be 2
```

### /app/getCubeRoot/

Cube root function 

**Response body**

```
PORT="$(shuf -i 2000-65535 -n 1)"; (timeout --signal=SIGINT 5 node server.js --port=$PORT --n1 x(number) ; exit 0) & sleep 1 && curl -s http://localhost:${PORT}/app/getCubeRoot/ && sleep 5
```

**Output**

```
For example n1 = 9

The expected output would be 2.08008382305
```

### /app/dervi/

Derviative function 

**Response body**

```
PORT="$(shuf -i 2000-65535 -n 1)"; (timeout --signal=SIGINT 5 node server.js --port=$PORT --n1 x(number) --power y(power) ; exit 0) & sleep 1 && curl -s http://localhost:${PORT}/app/dervi/ && sleep 5
```

**Output**

```
For example n1 = 1, n2 = 2, for this method I defaulted the variable as x, and n1 = the constants of the variable and the y is the power

The expected output would be 2, which supposely be 2x
```

### /app/nthDervi/

nthDerivative function 

**Response body**

```
This method is not yet finished, there is still some minor error in this, this method will be implented in the future
PORT="$(shuf -i 2000-65535 -n 1)"; (timeout --signal=SIGINT 5 node server.js --port=$PORT --n1 x(number) --x1 y(power) --func (function) ; exit 0) & sleep 1 && curl -s http://localhost:${PORT}/app/dervi/ && sleep 5
```

**Output**

```
For example n1 = 1, n2 = 2, func = 3 for this method I defaulted the variable as x, and n1 = the constants of the variable and the n2 is the nth times derivate, function is the power of the variable, that would be x^3 for this example.
The expected output would be 6, which supposely be 6x
```

### /app/getLogs/

return database

**Response body**

```
This method is to return the logs in the database, which is the history of the answers provided by the calculator
PORT="$(shuf -i 2000-65535 -n 1)"; (timeout --signal=SIGINT 5 node server.js --port=$PORT ; exit 0) & sleep 1 && curl -s http://localhost:${PORT}/app/getLogs/ && sleep 5
```

**Output**

```
For example, assume we already used the /app/add/, and n1 = 9, n2 = 4, the answer is 13. As we use getLogs, the expected output would be 
[
    {
        "status": "success",
        "endpoint": "/app/add/",
        "answer": "13"
    }
]
```

