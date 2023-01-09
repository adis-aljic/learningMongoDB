const express = require('express');
const { urlencoded } = require('express');
const cors = require('cors');

const user = require('./router/user_router');
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(`${__dirname}/CLIENT`));
app.use(
  urlencoded({
    extended: false,
  })
);

const PORT = 3500;
app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));

app.use('/', user);
