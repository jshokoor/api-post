
var request = require('request');

var $ = require('jquery');

const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('db.json');
const db = low(adapter);

db.defaults({ posts: [], user: {} })
    .write()

// vars that end in 'AsInt' should be changed to 'AsFloat'
var usualAndCustomaryPriceAsInt = 13.12;
var usualAndCustomaryPrice = "$13.12"
var totalOfIngredientsAsInt;
var totalOfIngredients;
var mediCalDispensingFeeAsInt = 7.25;
var mediCalDispensingFee = "$7.25";
var subtotalAsInt;
var subtotal;
var finalPrice;

request.post({
    url: 'https://www.dir.ca.gov/dwc/pharmfeesched/pfs.asp',
    form: {
        NDCno: '55111068405',
        MDUnits: '50',
        PriceBilled: usualAndCustomaryPrice,
        DateOfService: '01/31/2018'
    }
    },
    function (err, httpResponse, body) {

        var myLongString = httpResponse.body;
        var myTables = myLongString.split("class=\"tabborder\"");
        var myRows = [];
        myRows = myTables[1].split("<tr");
        var itemsInSecondRow = myRows[2].split("<td>");
        var itemToExtractFromSecondRow;
        var temp;
        var secondaryTemp = [];
        
        // 0 to 6
        for (var x = 0; x < itemsInSecondRow.length; x++)
        {
            console.log(x);
            temp = itemsInSecondRow[x].split("\r\n");
            console.log(typeof(temp[1]));
            secondaryTemp.push(temp[1]);
            
        }

        var thirdTemp;
        var arrayOfCleanValues = [];
        for (var x = 1; x < secondaryTemp.length; x++)
        {
            thirdTemp = secondaryTemp[x].trim();
            arrayOfCleanValues.push(thirdTemp);
        }
        
        totalOfIngredientsAsInt = parseFloat(arrayOfCleanValues[arrayOfCleanValues.length - 1]);
        totalOfIngredients = "$" + arrayOfCleanValues[arrayOfCleanValues.length - 1];
        arrayOfCleanValues.push(totalOfIngredients);
        arrayOfCleanValues.push(mediCalDispensingFee);
        subtotalAsInt = totalOfIngredientsAsInt + mediCalDispensingFeeAsInt;
        subtotal = subtotalAsInt.toString();
        subtotal = "$" + subtotal;
        arrayOfCleanValues.push(subtotal);
        arrayOfCleanValues.push(usualAndCustomaryPrice);
        if (usualAndCustomaryPriceAsInt < subtotalAsInt)
        {
            finalPrice = usualAndCustomaryPriceAsInt;
        }
        else
        {
            finalPrice = subtotal;
        }
        arrayOfCleanValues.push(finalPrice);
        
        console.log(arrayOfCleanValues);

        db.get('posts')
            .push({ output: arrayOfCleanValues })
            .write()
    })

//document.getElementById('firstBox').value = arrayOfCleanValues;