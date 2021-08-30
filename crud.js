const axios = require('axios');
const coctailMongo= require('./coctailMongo')


const addCoctail= async (req, res )=> {
    const { strDrink, strDrinkThumb} =req.body;
    const newObj = new coctailMongo({
        strDrink: strDrink,
        strDrinkThumb: strDrinkThumb
    })
    newObj.save();
    res.send (newObj)
} 

const getFavorite = async (req ,res )=> {
    coctailMongo.find({}, (err, data) =>{
        res.send(data);

    } ) 
}

const deleteFavorite = async (req, res) => {
    const {c_id}= req.params;
    coctailMongo.remove({_id:c_id}, (err, data) => {
        coctailMongo.find({}, (err, data) =>{
            res.send(data);
    
        } ) 
    })
}

module.exports = {addCoctail, getFavorite, deleteFavorite}