import jwt from 'jsonwebtoken';
export const getUser = (req) =>{
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
  
    if (token == null) return res.sendStatus(401)

    const tokenPayload = jwt.verify(token, process.env.TOKEN_SECRET)

    return tokenPayload
}