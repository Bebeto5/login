const express = require('express'); // Added this line
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

app.use(express.static('public'));
app.use(bodyParser.json());

// Dummy user
const USER = {
  username: 'admin',
  password: '1234'
};

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (username === USER.username && password === USER.password) {
    res.json({ message: 'Login successful!' });
  } else {
    res.json({ message: 'Invalid credentials' });
  }
});

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`)); //
