const express = require('express');
const mongoose = require('mongoose');
const userRouter = require('./routes/UserRoutes');

const app = express();
app.use(express.json());


mongoose.connect("mongodb+srv://Mustafa:m1g2b3n4@cluster0.zf9udrk.mongodb.net/Users?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(userRouter);

app.listen(3000, () => { console.log('Server is running...') });