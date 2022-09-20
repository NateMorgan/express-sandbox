import * as express from 'express'
import * as ejs from 'ejs'

const app = express.application


app.listen(3000, function(req,res){
  console.log("listening on port 3000")
})