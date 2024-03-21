require('dotenv').config();
const express = require('express');
const app = express();   
const port = process.env.PORT;                                           // Server Create

app.use(express.json());

const adminsRoutes = require('./Src/Routes/Admin/index.routes');
app.use('/api/admin',adminsRoutes);

// MONGOOSE
const mongoose = require('mongoose');

// DATABASE COLLECTION
async function main() {
    await mongoose.connect(process.env.MONGO_DB_URL);                  // Online Database
    // await mongoose.connect('mongodb://127.0.0.1:27017/project');    // Local Database
}
main()
.then(() => console.log('DB is connected...'))
.catch( err => console.log(err.message));

app.listen(port, () => {
    console.log(`Server start at http://localhost:${port}`);
});