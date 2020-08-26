fetch ( 'http://numbersapi.com/random/year?json' )
    .then( response => response.json() )
    .then( data => { console.log(data); } );