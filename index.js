const  express = require('express')
const cors = require('cors')
const app = express()
const mysql = require('mysql2');
require('dotenv').config()
app.use(cors())
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
  });

app.get('/', function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for all origins!'})
})
app.get('/users',(req,res) => {
    connection.query(
        'SELECT * FROM `users`',
        function(err, results) {
            res.json(results)
        }       
      );
})
app.listen(5000, function () {
  console.log('CORS-enabled web server listening on port 5000')
})