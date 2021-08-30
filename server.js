const express = require('express');

const cors = require('cors');

const axios = require('axios');

require('dotenv').config();

const app = express();

app.use(cors());
const mongoose = require('mongoose');
app.use(express.json());

const PORT = process.env.PORT || 8000;


mongoose.connect('mongodb://localhost:27017/cocktail', {useNewUrlParser: true, useUnifiedTopology: true});
/////////////////////////////////
const getCoctail = require('./Controller/Coctail')
const {addCoctail, getFavorite, deleteFavorite } = require('./crud')

////////////////////
app.get ("/" , (req ,res ) =>{
    res.send ('hello')
})
app.get ("/getCoctail", getCoctail);
app.post ("/getCoctail/fav", addCoctail);
app.get ("/getCoctail/fav", getFavorite);
app.delete ("/getCoctail/fav/:c_id", deleteFavorite);






app.listen(PORT, () =>{
    console.log(`server is working on http://localhost:${PORT}`);
})