/*const express=require('express');
const cors = require('cors');

const app=express();

app.use(express.json())
app.use(cors());
app.get('/' ,(req,res)=>{
    res.send('hello');
})



const prod=[
    {
        id:1,
        name:"karna"
    },
    {
        id:2,
        name:'hebhfws'
    }
]
app.get('/products' ,(req,res)=>{
    res.json(prod)
})

app.get('/products/:id' ,(req,res)=>{
    const newdata=prod.filter(item=>item.id.toString()===req.params.id);
    return res.json(newdata);
    
})
app.get('/products/:id', (req, res) => {
    const id = parseInt(req.params.id); // Convert id to an integer
    const newdata = prod.filter(item => item.id === id);
    return res.json(newdata);
});

app.post('/addproducts',(req,res)=>{
             const {id,name}=req.body;
             console.log(id,name);
             return res.send('data stored')

})

app.listen(5003,()=>console.log('server running....'))*/


const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello');
});

const products = [
    {
        id: 1,
        name: "karna"
    },
    {
        id: 2,
        name: 'hebhfws'
    }
];

app.get('/products', (req, res) => {
    res.json(products);
});

app.get('/products/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const product = products.find(item => item.id === id);
    if (product) {
        res.json(product);
    } else {
        res.status(404).send('Product not found');
    }
});

app.post('/addproducts', (req, res) => {
    const { id, name } = req.body;
    if (!id || !name) {
        return res.status(400).send('Both id and name are required');
    }

    // Assuming successful storage in a database
    // Here you can integrate with your database

    // Respond with a success message
    return res.send('Data stored successfully');
});

const PORT = process.env.PORT || 5003;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
