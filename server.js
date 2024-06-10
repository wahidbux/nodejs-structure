import express from 'express';
const app = express();
app.use(express.json());
import routes from './src/routes/index.js';
app.use(routes);

app.listen(6000, () => {
    console.log('Server connected successfully');
});

