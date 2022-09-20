// import modules
import express from 'express'
import * as studentData from './data/student.js'

//set up express app
const app = express()

// configure the app (app.set)
app.set("view engine","ejs")

// mount the middleware (app.use)


// Mount routes 
app.get("/student",function(req,res){
  res.render('index',{
    students:studentData.studentArr
  })
})

// Tell the app to listen on port 3000
app.listen(3000, function(req,res){
  console.log("listening on port 3000")
})