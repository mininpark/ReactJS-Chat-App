const express = require ('express');
const cors = require('cors');

const authRoutes = require("./routes/auth.js")

const app = express();
const PORT = process.env.PORT || 5000;

require('dotenv').config(); //load environmet variables from a .env file into process.env

app.use(cors());
app.use(express.json()); //frontend to backend to transform
app.use(express.urlencoded());

app.get('/', (req, res)=>{
  res.send('Hello, World');
});

app.use('/auth', authRoutes);

app.listen(PORT, () => console.log(`Server listening on ${PORT}`));