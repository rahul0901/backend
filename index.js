import express from 'express';
import Hello from './Controllers/GlobalControllers.js';
import Add from './Controllers/Addition.js';
import router from './Routes/index.js';

const app = express();
app.get('/', function (req, res) {
    res.send('Hello Rahul')
})

app.get('/controllers', Hello)

app.get('/addition', Add)

app.use('/app/v1', router)

app.listen(8000, () => console.log("App is running on port 8000 go and check"))
