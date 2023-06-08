// Task 3: JSON Web Tokens (JWT)


const jwt = require('jsonwebtoken');
const userId= "ab123";
const secretKey= "toqi1234";

function generateToken(userId, secretKey) {

  const token = jwt.sign(userId, secretKey,{

    expiresIn: '24h' // expires in 24 hours

     });
  return token;
}
generateToken(userId, secretKey);
// Task 4: Express.js Middleware


const authenticate= (req, res, next)=> {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  try {
    const decoded = jwt.verify(token, 'secretKey');
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
}
module.exports=authenticate