const user = require('../store/user.json');
const jwt = require('jsonwebtoken');
require('dotenv').config('../.env');

user.tokenData = {}

function getUserFullName() {
  return user.user_details["first name"] + " " + user.user_details["last name"];
}

function getUserName() {
  return user.user_details.username
}

function createUserToken(data) {
  user.tokenData =  jwt.sign(data, process.env.SECRET, { expiresIn: (Date.now() + (60 * 60)) });
  return { ...user.tokenData };
}

function authenticateUser(username, password) {
  let jsonSignedToken = false;
  
  if( username === user.user_details.username && password === user.user_details.password ) {
    let jsonSignedToken = createUserToken({ _id: users._id, username: users.user_details.username });
    return jsonSignedToken;
  } 
  
  return false;
}

function isUserToken(token) {
  if( Object.keys(user.tokenData).length > 0 ) {
    return user.tokenData.token === token.token;
  } 

  return false
}

function verifyUserToken(token) {
  if(isUserToken(token)) {
    try {
      let decoded = null;
      decoded = jwt.verify(token, process.env.SECRET)
      if(decoded) {
        return true;
      } else {
        return false
      }
    } catch( tokenError ) {
      return false;
    }
  }

  return false;
}

module.exports = { verifyUserToken, authenticateUser, getUserFullName, getUserName }