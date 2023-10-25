import express from 'express';

const app = express()

app.get('/', function(req, res){
    res.send('Hello Rahul')
})

// app.get('/hello', Hello);

// app.use("api/v1", rou te)

app.listen(8000, ()=> console.log("App is running on port 8000 go and check"))
