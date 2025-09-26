import express from 'express';
const app = express();

const port = 3000;
const jokes = [
    {
        id : 1 , 
        title : "first jokes", 
        description : "this is first jokes", 
    },{
        id : 2 , 
        title : "second jokes", 
        description : "this is second jokes", 
    },
    {
        id : 3 , 
        title : "third jokes", 
        description : "this is third jokes", 
    },
    {
        id :4 , 
        title : "four jokes", 
        description : "this is four jokes", 
    },
    {
        id : 5, 
        title : "five jokes", 
        description : "this is five jokes", 
    }
]
app.get('/',(req,res)=>{
    res.send('you are at homepage')
})
app.get('/api/jokes' , (req, res)=>{

    res.send(jokes);
})

app.listen(port , ()=>{
    console.log('server is listening on port 3000...');
    
})