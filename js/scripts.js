fetch ( 'http://numbersapi.com/random/year?json' )
    .then( response => response.json() )
    .then( data => { 

        const factSpot = document.getElementById( 'fact-spot' );

        // Grab the data we want to display
        const newNumber = data.number;
        const newFact = data.text;
        
        // Create the HTML elements
        const factP = document.createElement( 'P' );
        const factH2 = document.createElement( 'H2' );
        const factPText = document.createElement( 'P' );

        // Put the data into the elements
        factH2.textContent = `${newNumber}`;
        factPText.textContent = `${newFact}`;
        factH2.classList.add( "number" );
        factPText.classList.add( "fact" );

        // Append elements to parent paragraph
        factP.appendChild( factH2 );
        factP.appendChild( factPText );

        // Add paragraph container into main HTML
        factSpot.appendChild( factP );

     } );