const mongoose = require('mongoose');

const coctailSchema = new mongoose.Schema({
    strDrink: String,
    strDrinkThumb: String
  });

  const coctailMongo = mongoose.model('Coctail', coctailSchema);
  
  module.exports=coctailMongo;
