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
    const shoutArray = [];

    for (i = 0; i < 3; i++) {
        const numOfWords = dragonWords.firstWord.length -1;
        let randomNum = Math.floor(Math.random() * numOfWords);

        switch (i) {
            case 0:
                shoutArray.push(dragonWords.firstWord[randomNum]);
                break;
            case 1:
                shoutArray.push(dragonWords.secondWord[randomNum]);
                break;
            case 2:
                shoutArray.push(dragonWords.thirdWord[randomNum]);
                break;
            default:
                console.log('ERROR: generateShout was unable to create your shout.');
                break;
        }
    }
    return shoutArray;
}

//Translate the dragon shout to human language and store in an array
const translateShout = array => {
    const humanShoutArray = [];

    for (i = 0; i < array.length; i++) {

        switch (i) {
            case 0:
                const dragonFirstIndex = dragonWords.firstWord.indexOf(array[i]);
                humanShoutArray.push(humanWords.firstWord[dragonFirstIndex]);
                break;
            case 1:
                const dragonSecondIndex = dragonWords.secondWord.indexOf(array[i]);
                humanShoutArray.push(humanWords.secondWord[dragonSecondIndex]);
                break;
            case 2:
                const dragonThirdIndex = dragonWords.thirdWord.indexOf(array[i]);
                humanShoutArray.push(humanWords.thirdWord[dragonThirdIndex]);
                break;
            default:
                console.log('ERROR: translateShout was unable to translate your shout.');
                break;
        }
    }
    return humanShoutArray
}

//Combines generateShout and translateShout into one function that will format the arrays and log them to the console with a message for the user
const randomShout = () => {
    const dragonShout = generateShout();
    const humanShout = translateShout(dragonShout);
    console.log(`Your new shout is '${dragonShout.join(' ')}' as spoken in the dragon tongue.`);
    console.log(`This shout means '${humanShout.join(' ')}' in the human tongue.`);
}

//TEST
randomShout();