
const express = require('express');
const QRCode = require('qrcode');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('index');
});

app.post('/generate', (req, res) => {
    const data = req.body.text;
    QRCode.toDataURL(data, (err, url) => {
        if (err) throw err;
        res.render('result', { url });
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
