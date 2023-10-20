import express from 'express'
import { Hello } from './Controller/GlobalController.js'

const app = express()

app.get('/', function(req, res){
    res.send('Hello Rahul')
})

app.get('/hello', Hello);

app.listen(8000, ()=> console.log("App is running on port 8000 go and check"))
