import express from 'express';

const app = express();

app.get('/users', (req, res) => {
    console.log('Hello World');
});

app.listen(3000);