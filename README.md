---

1. Project Structure

login-app/
├── public/
│   └── index.html
├── server.js
├── package.json


---

2. Create Files

a. index.html
html
<!DOCTYPE html>
<html>
<head>
  <title>Login</title>
</head>
<body>
  <h2>Login</h2>
  <form id="loginForm">
    <input type="text" name="username" placeholder="Username" required /><br/>
    <input type="password" name="password" placeholder="Password" required /><br/>
    <button type="submit">Login</button>
  </form>

  

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

app.listen(PORT, () => console.log(Server running at http://localhost:${PORT}));


---

*c. `package.json`*
json
{
  "name": "login-app",
  "version": "1.0.0",
  "main": "server.js",
  "scripts": {
    "start": "node server.js"
  },
  "dependencies": {
    "express": "^4.18.2",
    "body-parser": "^1.20.2"
  }
}


---

*3. Install Dependencies*
bash
npm install


---

*4. Run the App*
bash
node server.js


Go to *http://localhost:3000*

---

*5. Upload to GitHub*

*a. Create Git Repo*
bash
git init
git add .
git commit -m "Initial commit"


*b. Push to GitHub*
bash
git remote add origin https://github.com/YOUR_USERNAME/login-app.git
git push -u origin master
```

Let me know if you'd like a zip or deployment guide too.









To run your login app (JavaScript/Node.js) in Postman, follow these steps:

✅ 1. Start your Node.js server
Make sure your server (Express app) is running locally. Usually:

bash
node app.js

Or:
bash
npm start


It will listen on a port, e.g., http://localhost:3000

---

✅ 2. Set up Postman to test login

Step-by-step:

1. Open Postman
2. Create a new POST request
3. Use the endpoint (replace port if needed):
   
   http://localhost:3000/login
   
4. Go to Body tab → select raw → choose JSON
5. Paste example credentials:
   json
   {
     "username": "your_username",
     "password": "your_password"
   }
   
6. Click Send

---

✅ 3. Check response
If your backend is set up correctly, you'll get a success or error message based on login credentials.
