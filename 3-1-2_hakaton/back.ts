import express from "express";
import bodyParser from "body-parser";
import cors from 'cors';

const app = express();

app.use(cors({
    origin: true,
    credentials: true
}));
app.use(bodyParser.json());

enum Button {
    PLUS = "plus",
    MINUS = "minus"
}

let clicks = {plus: 0, minus: 0 };

app.post('/api/click', (req, res) => {
    const button: Button= req.body.button;
    clicks[button]++;
    res.json(clicks);
});

app.get('/', (req, res) => {
    res.sendFile( '/home/kvl4k/Documents/hakaton2/buttons.html');
});

app.get('/dist/front.js', (req, res) => {
    res.sendFile( '/home/kvl4k/Documents/hakaton2/dist/front.js');
});

app.listen(3000, () => console.log("Server started..."))
