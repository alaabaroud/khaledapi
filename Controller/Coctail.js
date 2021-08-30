const axios = require('axios');
const coctailModel = require("../Model/Model")
const getCoctail = async (req, res )=> {
await axios
.get("https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic")
.then (result => {
    const response = result.data.drinks.map(i =>{
        return new coctailModel(i)
    });
     res.send(response)
}).catch (err => {
console.log(err);
})
}

module.exports= getCoctail