const express = require('express');
const bodyParser = require('body-parser');
const router = require('./routers/index');


const app = express();
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/products', router.productRouter );

app.listen(3000, () => {
  console.log('App listening on port 3000!');
});