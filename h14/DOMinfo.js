/*---DOM ELEMENTEN ZOEKEN---*/

/*
getElementById = zoek één element adhv de waarde van het attribuut id
getElementsByTagName = geeft ee nlive collection terug met elementen met die bepaalde naam
getElementsByClassName = live collection van alle elementen in die class attribute
*/

/*
DOM API = live lists en static lists
live lists passen zich aan als de DOM tree zich ook aanpast
static lists niet

live lists = bv bij een getTagName
als ik hiervan een array maak, wordt de inhoud niet meer gewijzigd samen met de DOM tree
--> let list = Array.from(doc.getTagName("p"))
*/

/*
DOM AANPASSINGEN

DOCUMENT.BODY.

appendChild = voeg newElement toe aan de lijst van children
parentElement.appendChild(newElement)

insertBefore = plaats in parentE een newE voor de existingE
parentE.insertBefore(newE, existingE)

replaceChild = plaats in parentE een newE op plaats van existingE
parentE.replaceChild(newE, existingE)
*/

/*
querySelector = kiest gewoon de eerste die voldoet
querySelectorAll = kiest ze allemaal
*/