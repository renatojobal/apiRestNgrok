const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const { getStudents, getStudentById, notFound } = require("./controller");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())


app.get('/group/1/student/:id', getStudentById)


app.get('/group/1', getStudents)




  


app.listen(3000);
console.log("Server on port", 3000);
