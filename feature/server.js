const app = require('express')();


app.get('/', (req, res) => {
    return 'Hello word'
});


const port = process.env || 3000;

app.listen(()=> console.log(`Server running on port http://127.0.0.1:{port}...`));