const { fruitDb } = require("../model/fruitModel");

/**
 * @param urlParamKey - Param 
 */
function fruitRoute(urlParamKey) {
    // Return callback used as the express route.
    return (req, res) => {
        // If the URL parameter is undefined
        if(req.params[urlParamKey] === undefined)
            return res.status(500).send("Invalid ID");
            
        // If the URL parameter is not numeric
        if(!(/[0-9]+/.test(req.params[urlParamKey])))
            return res.status(500).send("Invalid ID");
        
        // Find the fruit, and send it to the user with some additional info
        let fruit = fruitDb[req.params[urlParamKey]];
        return res.status(200).json({
            ...fruit,
            link: fruit.generateGoogleSearch()
        });
    };
}

module.exports = {
    fruitRoute
}