const express = require('express');
const app = express();

app.get('/', (req,res) => res.send('Hello Nice to meet ypu'));

app.listen(3000, () => console.log('123'));
