const express = require('express');
const app = express();

app.get('/', (req,res) => res.send('Hello Nice to meet you123456asdf!!!'));

app.listen(3000, () => console.log('123'));
