import sqlite3 from 'better-sqlite3';
import { query } from 'express';

const db = new sqlite3('data.db');

export default{
    checkTable : function (tableName) {
        const stmt = db.prepare(`SELECT name FROM sqlite_schema WHERE type='table' and name = '${tableName}';`);
        let row = stmt.get();
        return row === underfined
    },

    createLogTable: function (tableName){
        const queryCreateTable = `CREATE TABLE ${tableName} (status TEXT NOT NULL, endpoint TEXT NOT NULL, detail TEXT);`
        db.exec(queryCreateTable)
    },
    insertLog : function (status, endpointName, Answer){
        let tableName = 'datalog'
        if (this.checkTable(tableName)){
            this.createLogTable(tableName);
        }
        const queryInsertLog = `INSERT INTO ${tableName} (status, endpoint, answer) VALUES ('${status}','${endpointName}', '${Answer}');`
        db.exec(queryInsertLog);
    },

    retrieveLog : function () {
        let tableName = 'datalog';
        if (this.checkTable(tableName)){
            this.createLogTable(tableName);
        }
        const queryRetrieveLog = `SELECT * FROM ${tableName} ORDER BY id DESC LIMIT 10;`
        let stmt = db.prepare(queryRetrieveLog);
        let output = stmt.all();

        return output;
    },
    
}
