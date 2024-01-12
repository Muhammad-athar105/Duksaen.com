const jwt = require ('jsonwebtoken')

//const  User = require ('../models/user.model')
const  Hotel = require ('../models/hotel.model')

var checkUserAuth = async (req, res, next) => {
  let token
  const { authorization } = req.headers
  if (authorization && authorization.startsWith('Bearer')) {
    try {
      // Get Token from header
      token = authorization.split(' ')[1]

      // Verify Token
      const { hotelID } = jwt.verify(token, process.env.JWT_SECRET)
      console.log({token})

      // Get User from Token
      req.user = await Hotel.findById(hotelID).select('-password')

      next()
    } catch (error) {
      console.log(error)
      res.status(401).send({ "status": "failed", "message": "Unauthorized User" })
    }
  }
  if (!token) {
    res.status(401).send({ "status": "failed", "message": "Unauthorized User, No Token" })
  }
}

module.exports = checkUserAuth
