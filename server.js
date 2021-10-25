const express = require('express');
const app = express();
const { port } = require('./config');
const router = express.Router();
const appRoutes = require('./routes/api')(router);

app.use('/api', appRoutes);

app.listen(port, () => {
    console.log(`Running on port: ${port}`);
})