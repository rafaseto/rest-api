// represents the API we're building, its value is an import of the express package
const app = require('express')();
const PORT = 8080;

// setting up the server with this endpoint
app.get('/persons', (request, response) => {
    response.status(200).send({
        person: 'Rafael',
        age: 21 
    })
});

// listening for connections, listening on a specific port (8080). Firing up the API on the server

app.listen(
    PORT,
    () => console.log(`it's alive on http://localhost:${PORT}`)
)
