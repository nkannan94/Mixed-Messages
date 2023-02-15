//Objects containing arrays of the different words of power in each language
const dragonWords = {
    firstWord: ['Raan', 'Laas', 'Mid', 'Feim', 'Gol', 'Od', 'Hun', 'Lok', 'Ven', 'Zun', 'Faas', 'Mul', 'Joor', 'Gaan', 'Su', 'Yol', 'Fo', 'Iiz', 'Kaan', 'Krii', 'Tiid', 'Rii', 'Strun', 'Dur', 'Zul', 'Fus', 'Wuld'],
    secondWord: ['Mir', 'Yah', 'Vur', 'Zii', 'Hah', 'Ah', 'Kaal', 'Vah', 'Gaar', 'Haal', 'Ru', 'Qah', 'Zah', 'Lah', 'Grah', 'Toor', 'Krah', 'Slen', 'Drem', 'Lun', 'Klo', 'Vaaz', 'Bah', 'Neh', 'Mey', 'Ro', 'Nah'],
    thirdWord: ['Tah', 'Nir', 'Shaan', 'Gron', 'Dov', 'Viing', 'Zoor', 'Koor', 'Nos', 'Viik', 'Maar', 'Diiv', 'Frul', 'Haas', 'Dun', 'Shul', 'Diin', 'Nus', 'Ov', 'Aus', 'Ul', 'Zol', 'Qo', 'Viir', 'Gut', 'Dah', 'Kest']
};

const humanWords = {
    firstWord: ['Animal', 'Life', 'Loyal', 'Fade', 'Earth', 'Snow', 'Hero', 'Sky', 'Wind', 'Weapon', 'Fear', 'Strength', 'Mortal', 'Stamina', 'Air', 'Fire', 'Frost', 'Ice', 'Kyne', 'Kill', 'Time', 'Essence', 'Storm', 'Curse', 'Voice', 'Force', 'Whirlwind'],
    secondWord: ['Allegiance', 'Seek', 'Valor', 'Spirit', 'Mind', 'Hunter', 'Champion', 'Spring', 'Unleash', 'Hand', 'Run', 'Armor', 'Finite', 'Magicka', 'Battle', 'Inferno', 'Cold', 'Flesh', 'Peace', 'Leech', 'Sand', 'Tear', 'Wrath', 'Never', 'Fool', 'Balance', 'Fury'],
    thirdWord: ['Pack', 'Hunt', 'Inspire', 'Bind', 'Dragon', 'Wing', 'Legend', 'Summer', 'Strike', 'Defeat', 'Terror', 'Wyrm', 'Temporary', 'Health', 'Grace', 'Sun', 'Freeze', 'Statue', 'Trust', 'Suffer', 'Eternity', 'Zombie', 'Lightning', 'Dying', 'Far', 'Push', 'Tempest']
};

//Returns an array with 3 random dragon words
const generateShout = () => { 
    const shout = [];

    for (i = 0; i < 3; i++) {
        const numOfWords = dragonWords.firstWord.length -1;
        let randomNum = Math.floor(Math.random() * numOfWords);

        switch (i) {
            case 0:
                shout.push(dragonWords.firstWord[randomNum]);
                console.log(dragonWords.firstWord.indexOf(dragonWords.firstWord[randomNum]));
                break;
            case 1:
                shout.push(dragonWords.secondWord[randomNum]);
                console.log(dragonWords.secondWord.indexOf(dragonWords.secondWord[randomNum]));
                break;
            case 2:
                shout.push(dragonWords.thirdWord[randomNum]);
                console.log(dragonWords.thirdWord.indexOf(dragonWords.thirdWord[randomNum]));
                break;
            default:
                console.log('ERROR: generateShout was unable to create your shout.');
        }
    }
    return shout;
}

console.log(generateShout());


//Translate the dragon word to human language
//The dragon word and human language indecies are equal