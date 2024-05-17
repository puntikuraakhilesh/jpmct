const express = require('express');

const app = express();
app.use(express.json());

let obj = {
    name: 'lokesh',
    age: 30,
    email: 'g@gmail.com'
};
app.get('/',(req,res)=>{
    res.send("HOME PAGE")
})
app.get('/api/std', (req, res) => {
    res.json(obj);
});

app.post('/api/std', (req, res) => {
    std = req.body;
    res.json(std);
});

app.patch('/api/std', (req, res) => {
    std = req.body;
    res.json(std);
});

app.delete('/api/std/:name', (req, res) => {
    std = {};
    res.json({ message: 'Student deleted' });
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});