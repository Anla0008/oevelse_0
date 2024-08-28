console.log("JavaScript-filen er indlæst");

// Opretter et array af drikkevarer, hvor hver drik er repræsenteret som et objekt
// Hvert objekt har to egenskaber: 'name' (drikkens navn) og 'containsAlcohol' (om drikken indeholder alkohol)
const drinks = [
  { name: "øl", containsAlcohol: true }, // Drik 1: Øl indeholder alkohol
  { name: "snaps", containsAlcohol: true }, // Drik 2: Snaps indeholder alkohol
  { name: "cola", containsAlcohol: false }, // Drik 3: Cola er alkoholfri
  { name: "schweppes", containsAlcohol: false }, // Drik 4: Schweppes er alkoholfri
];

// Definerer en funktion, der håndterer klik på drikknapperne
function handleClick(drinkName) {
  // Finder den drik i 'drinks'-arrayet, der matcher det givne driknavn
  const drink = drinks.find((drink) => drink.name === drinkName);

  // Tjekker om den fundne drik indeholder alkohol
  if (drink.containsAlcohol) {
    console.log("indeholder alkohol"); // Logger besked, hvis drikken indeholder alkohol
  } else {
    console.log("alkoholfri"); // Logger besked, hvis drikken er alkoholfri
  }
}
