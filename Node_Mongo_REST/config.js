module.exports = {
  port: process.env.PORT || 3000,
  //connect to MONGODB (production) and mongodb (develop)
  db: process.env.MONGODB || 'mongodb://localhost:27017/apiRestShop',
  SECRET_TOKEN: 'miclavedetokens'
}
