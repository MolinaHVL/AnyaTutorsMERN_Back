import express from "express";
import mongoose from "mongoose";

const app = express();
app.use(express.json());


mongoose.connect('mongodb+srv://Arshun:1234@molinadb.h4ldxb3.mongodb.net/prueba?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
const Schema = mongoose.Schema
const UserSchema = new Schema({
    name: String
})

const User = mongoose.model('User', UserSchema)

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

app.listen(8000, () => {
    console.log('server listening at port 8000');
})

app.post('/users', (req, res) => {
    const user = new User(req.body)
    user.save((err, user) => {
        if (err) return res.status(500).send(err)
        return res.status(200).send(user)
    })
})

