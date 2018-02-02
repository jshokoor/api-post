var request = require('request');

request.post({
    url: 'https://www.dir.ca.gov/dwc/pharmfeesched/pfs.asp',
    form: {
        NDCno: '55111068405',
        MDUnits: '50',
        PriceBilled: '$13.12',
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
            console.log(thirdTemp);
            arrayOfCleanValues.push(thirdTemp);
        }
        
        console.log(secondaryTemp);
        console.log(arrayOfCleanValues);

    })