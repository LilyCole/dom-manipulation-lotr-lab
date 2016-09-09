    //console.log("Linked.");

    // Dramatis Personae
    var hobbits = [
      'Frodo Baggins',
      'Samwise \'Sam\' Gamgee',
      'Meriadoc \'Merry\' Brandybuck',
      'Peregrin \'Pippin\' Took'
    ];

    var buddies = [
      'Gandalf the Grey',
      'Legolas',
      'Gimli',
      'Strider',
      'Boromir'
    ];

    var lands = ['The Shire', 'Rivendell', 'Mordor'];
    var body = document.querySelector('body');

    // Part 1


    function makeMiddleEarth() {

      // create a section tag with an id of middle-earth
        var middleEarth = document.createElement('div');
        middleEarth.id = 'middle-earth';

      // inside, add each land as an article tag
        for (var i=0; i < lands.length; i++) {
          var landsArticle = document.createElement('article');
          middleEarth.appendChild(landsArticle);

      // inside each article tag include an h1 with the name of the land
          var landsHeader = document.createElement('h1');
          var headerText = document.createTextNode(lands[i]);     
          landsHeader.appendChild(headerText);
          landsArticle.appendChild(landsHeader);
        }
      // append middle-earth to your document body
      body.appendChild(middleEarth);  
    }

    // var shire = body.querySelectorAll('article')[0];
    // var rivendell = body.querySelectorAll('article')[1];
    // var mordor = body.querySelectorAll('article')[2];

    makeMiddleEarth();

    var shire = document.getElementsByTagName('article')[0];
    var rivendell = document.getElementsByTagName('article')[1];
    var mordor = document.getElementsByTagName('article')[2];


    // Part 2
    function makeHobbits() {
      // display an unordered list of hobbits in the shire (which is the FIRST [ed. Lily] article tag on the page)
      // give each hobbit a class of hobbit
      //var shire = document.getElementsByTagName('article')[0];
      var hobbitList = document.createElement('ul');
      shire.appendChild(hobbitList);
      for (var i=0; i<hobbits.length;i++) {
        var hobbitListItem = document.createElement('li');
        hobbitList.appendChild(hobbitListItem);

        var listText = document.createTextNode(hobbits[i]); 
        hobbitListItem.appendChild(listText); 
        hobbitListItem.className ="hobbit";
      }
    }
    // makeHobbits();


    // Part 3

    function keepItSecretKeepItSafe() {
      // create a div with an id of 'the-ring'
      theOneRing = document.createElement('div');

      // give the div a class of 'magic-imbued-jewelry'
      theOneRing.className = "magic-imbued-jewelry";

      // add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
      theOneRing.addEventListener('click',nazgulScreech());

      // add the ring as a child of Frodo
      var frodo = document.getElementsByClassName('hobbit')[0];
      frodo.appendChild(theOneRing);
    }
    
    // keepItSecretKeepItSafe();

    // Part 4


    function makeBuddies() {
      // create an aside tag
      var asideTag = document.createElement('aside');

      // attach an unordered list of the 'buddies' in the aside
      var buddiesList = document.createElement('ul');
      asideTag.appendChild(buddiesList);
      for (var i=0; i<buddies.length;i++) {
        var buddiesListItem = document.createElement('li');
        buddiesList.appendChild(buddiesListItem);

        var listText = document.createTextNode(buddies[i]); 
        buddiesListItem.appendChild(listText); 
      }
      // insert your aside as a child element of rivendell
      rivendell.appendChild(asideTag);
    }
    // makeBuddies();

    // Part 5

    

    function beautifulStranger() {
      // change the 'Strider' textnode to 'Aragorn'  
      var strider = rivendell.getElementsByTagName('li')[3];
      strider.textContent = "Aragorn";
    }
    // beautifulStranger();

    // Part 6

    function leaveTheShire() {
      // assemble the hobbits and move them to Rivendell
      //var shire = body.querySelectorAll('article')[1];
      var hobbits = shire.querySelector('ul');
      //var rivendell = body.querySelectorAll('article')[1];
      rivendell.appendChild(hobbits);
    }
    // leaveTheShire();

    // Part 7

    var theFellowship = document.createElement('div');
      

    function forgeTheFellowShip() {
      // create a new div called 'the-fellowship' within rivendell
      theFellowship.id = 'the-fellowship';

      fellowshipJoiners = rivendell.getElementsByTagName('li');
      fellowshipLength = fellowshipJoiners.length;
      for(var i = fellowshipLength-1;  i >= 0; i--){
      //  console.log("next joiner: "+fellowshipJoiners[i].textContent);
      
      // add each hobbit and buddy one at a time to 'the-fellowship'
      // after each character is added make an alert that they have joined your party
    //    alert(fellowshipJoiners[i].textContent+ " joined the party!");
        theFellowship.appendChild(fellowshipJoiners[i]);
      }
      rivendell.appendChild(theFellowship);  
    }

    // forgeTheFellowShip();

    // Part 8


    function theBalrog() {
      // change the 'Gandalf' textNode to 'Gandalf the White'
      // apply style to the element
      // make the background 'white', add a grey border
      var gandalf = rivendell.getElementsByTagName('li')[8];
      gandalf.textContent = "Gandalf the White";
      gandalf.style.background = "white";
      gandalf.style.border = "2px solid gray";
    }

    // theBalrog();

    // Part 9

    function hornOfGondor() {
      // pop up an alert that the horn of gondor has been blown
    //  alert("The horn of Gondor has been blown!");
      var boromir = rivendell.getElementsByTagName('li')[4];

      // Boromir's been killed by the Uruk-hai!
      // put a linethrough on boromir's name
      boromir.style.textDecoration = "line-through";

      // Remove Boromir from the Fellowship
      theFellowship.removeChild(boromir);
    }

    // hornOfGondor();

    // Part 10

    function itsDangerousToGoAlone(){
      // take Frodo and Sam out of the fellowship and move them to Mordor
      var frodo = rivendell.getElementsByTagName('li')[3];
      var sam = rivendell.getElementsByTagName('li')[2];
      theFellowship.removeChild(frodo);
      theFellowship.removeChild(sam);
      mordor.appendChild(frodo);
      mordor.appendChild(sam);
      // add a div with an id of 'mount-doom' to Mordor

      mountDoom = document.createElement('div');
      mountDoom.id = "mount-doom";
      mordor.appendChild(mountDoom);
    }

    // itsDangerousToGoAlone();

    // Part 11

    function weWantsIt() {
      // Create a div with an id of 'gollum' and add it to Mordor
      gollum = document.createElement('div');
      gollum.id = "gollum";
      mordor.appendChild(gollum);

      // Remove the ring from Frodo and give it to Gollum
      frodo = mordor.querySelectorAll('li')[0];
      gollum.appendChild(theOneRing);

      // Move Gollum into Mount Doom
      mountDoom.appendChild(gollum);
    }

    // weWantsIt();

    // Part 12

    function thereAndBackAgain() {
      // remove Gollum and the Ring from the document
      // remove all the baddies from the document
      gollum.removeChild(theOneRing);
      mountDoom.removeChild(gollum);

      // Move all the hobbits back to the shire
      newHobbitList = document.createElement('ul')
      hobbitsToMove = document.getElementsByClassName("hobbit");
 

      length= hobbitsToMove.length;
      for(var i=length-1; i>=0;i--){
        newHobbitList.appendChild(hobbitsToMove[i]);
      }
      shire.appendChild(newHobbitList);

    }

    // thereAndBackAgain();