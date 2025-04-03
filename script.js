const heroes = [
    { name: "Luke Skywalker", side: "Lumineux", planet: "Tatooine", species: "Humain", lightsaberColor: "Bleu", masteryOfForce: "Avancé" },
    { name: "Darth Vader", side: "Obscur", planet: "Tatooine", species: "Humain", lightsaberColor: "Rouge", masteryOfForce: "Maîtrise totale" },
    { name: "Yoda", side: "Lumineux", planet: "Dagobah", species: "Yoda's Species", lightsaberColor: "Vert", masteryOfForce: "Légendaire" },
    { name: "Han Solo", side: "Lumineux", planet: "Corellia", species: "Humain", lightsaberColor: "Aucun", masteryOfForce: "Aucun" },
    { name: "Leia Organa", side: "Lumineux", planet: "Alderaan", species: "Humain", lightsaberColor: "Bleu", masteryOfForce: "Débutante" },
    { name: "Emperor Palpatine", side: "Obscur", planet: "Naboo", species: "Humain", lightsaberColor: "Rouge", masteryOfForce: "Maîtrise totale" },
    { name: "Chewbacca", side: "Lumineux", planet: "Kashyyyk", species: "Wookiee", lightsaberColor: "Aucun", masteryOfForce: "Aucun" },
    { name: "Obi-Wan Kenobi", side: "Lumineux", planet: "Stewjon", species: "Humain", lightsaberColor: "Bleu", masteryOfForce: "Avancé" },
    { name: "R2-D2", side: "Lumineux", planet: "Naboo", species: "Droid", lightsaberColor: "Aucun", masteryOfForce: "Aucun" },
    { name: "C-3PO", side: "Lumineux", planet: "Tatooine", species: "Droid", lightsaberColor: "Aucun", masteryOfForce: "Aucun" }
    ];
    
    
    // find(): renvoie le premier element d'un tableau qui satisfait une fonction
    // findLast():  parcourt le tableau dans l'ordre inverse et renvoie la valeur du premier élément satisfaisant une fonction

    // findIndex():  renvoie l'index du premier élément d'un tableau satisfaisant la fonction
    // findLastIndex(): parcourt le tableau dans l'ordre inverse et renvoie l'index du premier élément satisfaisant la fonction
    // indexOf(): renvoie le premier indice pour lequel on trouve un élément donné dans un tableau
    // lastIndexOf(): recherche cette chaîne et renvoie l'index de la dernière occurrence de la sous-chaîne spécifiée


    // 🔥 Challenge 1 :
    // 👉 Trouve le premier héros lumineux ayant un sabre laser bleu.
    
const firstLightBlue = heroes.find( hero => hero.side === "Lumineux" && hero.lightsaberColor === "Bleu");
console.log("1- Le premier héros lumineux ayant un sabre laser bleu est :", firstLightBlue.name);

    // ⚡ Challenge 2 :
    // 👉 Trouve le dernier héros dont le nom contient "Kenobi".
    
const lastKenobi = heroes.findLast(hero => hero.name.includes("Kenobi"));
console.log("2- Le dernier héros dont le nom contient 'Kenobi' est :", lastKenobi.name);

    // 🧬 Challenge 3 :
    // 👉 Trouve l'index du premier héros ayant la maîtrise de la Force "Légendaire" et la planète d'origine "Dagobah".
    
const legendeDogobah = heroes.findIndex(hero => hero.planet === "Dagobah" && hero.masteryOfForce === "Légendaire");
console.log("3- Le premier héros ayant la maîtrise de la Force 'Légendaire' et la planète d'origine 'Dagobah' est situé en index n° :", legendeDogobah);
    
    // 🥊 Challenge 4 :
    // 👉 Trouve l'index du dernier héros dont la planète d'origine est "Tatooine" et qui a un sabre laser rouge.
    
const lastHTatooineRed = heroes.findLastIndex(hero => hero.planet === "Tatooine" &&  hero.lightsaberColor === "Rouge");
console.log("4- Le dernier héros dont la planète d'origine est 'Tatooine' et qui a un sabre laser rouge situé en index n° :", lastHTatooineRed);
   
    // 🎭 Challenge 5 :
    // 👉 Trouve l'index du premier héros dont le nom est "Yoda".
    
const firstHYoda = heroes.findIndex(hero => hero.name === "Yoda");
console.log("5- L'index du premier héros dont le nom est 'Yoda' est :", firstHYoda);

    // 🌌 Challenge 6 :
    // 👉 Trouve l'index du dernier héros ayant un sabre laser vert.
    
const lastGreen = heroes.findLastIndex(hero => hero.lightsaberColor === "Vert");
console.log("6- L'index du dernier héros ayant un sabre laser vert est :", lastGreen);

    // 💣 Challenge 7 :
    // 👉 Trouve le premier héros non lumineux et de l'espèce "Wookiee".
    
const wookiee = heroes.find(hero => hero.side !== "Obscur" && hero.species === "Wookiee");
console.log("7- Le premier héros non lumineux et de l'espèce 'Wookiee' est :", wookiee.name);

    // 🧠 Challenge 8 :
    // 👉 Trouve le dernier héros dont le nom contient "Solo" (insensible à la casse).
    
const lastSolo = heroes.findLast(hero => hero.name.includes("Solo"));
console.log("Le dernier héros dont le nom contient 'Solo' est : ", lastSolo.name.toLowerCase());

    // 🧪 Challenge 9 :
    // 👉 Trouve le premier héros dont la maîtrise de la Force est "Aucun".
    
const noForce = heroes.find(hero => hero.masteryOfForce === "Aucun");
console.log("Le premier héros dont la maîtrise de la Force est'Aucun' est : ", noForce.name);

    // 🧞‍♂️ Challenge 10 :
    // 👉 Trouve le premier héros dont le nom fait plus de 10 caractères.

const tenStrings = heroes.find(hero => hero.name.length > 10);
console.log("Le premier hero dont le nom fait plus de 10 caractères est:", tenStrings.name);