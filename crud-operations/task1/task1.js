const express=require('express');
const bodyParser=require('body-parser');
const router=require('../../routes/user-routes');

const app=express();
const port=3000;
app.use(bodyParser.json());

app.get('/',(req, res)=>{
    res.send('SUCCESS');
})
app.use('/users',router);

app.listen(port,()=>{
    console.log(`Express listening on port ${port}`)
})
