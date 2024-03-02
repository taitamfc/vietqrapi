
const express = require('express')
const app = express()
const port = 3000

const { QRPay } = require('vietnam-qr-pay');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/vietQrDecode', (req, res) => {
  const qrContent = req.body.code;
  const qrPay = new QRPay(qrContent);
  res.json(qrPay);
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})