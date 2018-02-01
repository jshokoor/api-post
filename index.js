var request = require('request');

request.post({
    url: 'https://www.dir.ca.gov/dwc/pharmfeesched/pfs.asp',
    form: {
        NDCno: '00002026002',
        MDUnits: '123',
        PriceBilled: '$12.45',
        DateOfService: '1/5/2004'
    }
},
    function (err, httpResponse, body) {

        console.log(httpResponse);

    })