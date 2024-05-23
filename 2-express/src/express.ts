import express from 'express';
export const app = express();
app.use(express.json());
app.post('/sum', (req, res) => {
  const a = req.body.a;
  const b = req.body.b;
  const result = a + b;
  res.json({ answer: result });
});

app.post('/sum', (req, res) => {
  const a = req.body.a;
  const b = req.body.b;
  if (a > 100000 || b > 100000) {
    return res.status(422).json({
      message: 'Sorry we dont support big numbers',
    });
  }
  const result = a + b;
  res.json({ answer: result });
});

app.post('/multiply', (req, res) => {
  const a = req.body.a;
  const b = req.body.b;
  const result = a * b;
  res.json({ answer: result });
});
