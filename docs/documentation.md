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

```

**Output**

```

```

### /app/subtract/

Subtract function 

**Response body**

```

```

**Output**

```

```

### /app/multiply/

multiply function 

**Response body**
```

```

**Output**

```

```

### /app/divide/

Divide function 

**Response body**

```
s
```

**Output**
```

```

### /app/getSin/

Sine function 

**Response body**

```

```

**Output**

```

```

### /app/getCos/

Cosine function 

**Response body**

```

```

**Output**

```

```

### /app/getTanFromRadians/

get tangent from radians function 

**Response body**

```

```

**Output**

```

```

### /app/getTanFromDegrees/

get tangent from degrees function 

**Response body**

```

```

**Output**

```

```

### /app/exponentiation/

exponential function 

**Response body**

```

```

**Output**

```

```

### /app/getlog/

logarithm function 

**Response body**

```

```

**Output**

```

```

### /app/getLogFromDifferentBase/

Logarithm with different base function 

**Response body**

```

```

**Output**

```

```

### /app/getSquareRoot/

Square root function 

**Response body**

```

```

**Output**

```

```

### /app/getCubeRoot/

Cube root function 

**Response body**

```

```

**Output**

```

```

### /app/dervi/

Derviative function 

**Response body**

```

```

**Output**

```

```

### /app/nthDervi/

nthDerivative function 

**Response body**

```

```

**Output**

```

```

