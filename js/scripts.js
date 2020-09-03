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
        const factButton = document.createElement( 'BUTTON' );

        // Put the data into the elements
        factH2.textContent = `${newNumber}`;
        factPText.textContent = `${newFact}`;
        factH2.classList.add( "number" );
        factPText.classList.add( "fact" );

        // Add missing info to elements
        factButton.type = "button";
        factButton.id = "newNumberButton";
        factButton.classList.add("button");
        factButton.innerHTML = "New Random Number!";

        // Append elements to parent paragraph
        factP.appendChild( factH2 );
        factP.appendChild( factPText );
        factP.appendChild( factButton );

        // Add paragraph container into main HTML
        factSpot.appendChild( factP );

        newNumberButton.addEventListener( "click", ( event ) => {
            console.log("New number!");

            // Citation
            //      https://www.w3schools.com/jsref/met_loc_reload.asp
            //      The below line of code reloads the browser on button click
            location.reload();
        } );
})