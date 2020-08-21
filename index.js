const express = require('express');
const { request } = require('http');
const { hostname } = require('os');

const port = 3000;
const app = express();

app.get('/', (req, res) => {
    console.log('Get /');

    res.send('<h2>Authors API</h2>');
});

const authors = [
    {
        id: 1,
        name: 'Lawrence Nowell',
        nationality: 'UK',
        
    },
    {
        id:2,
        name: 'William Shakespear',
        nationality: 'UK',
        
    },
    {
        id:3,
        name: 'Charles Dickens',
        nationality: 'US',
        
    },
    {
        id4,
        name: 'Oscar Wilde',
        nationality: 'UK',

    },
]

app.get('/authors/:id', (req, res) => {

    const currentAuthor = authors[req.params.id];

    


app.listen(port, hostname, () => {
    console.log('server running at http://${hostname}:${port}/');
});