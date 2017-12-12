
const items = ['helmet', 'chest armor', 'leg armor', 'necklace', '2 rings', 'weapon', 'shield'];

const newCharacter = {
    name: '',
    item: '',
    stats:  {
        strength: null,
        dexterity: null,
        intelligence: null,
        charisma: null,
        constitution: null,
        willpower: null
    },
}

const stats = object => {
    for (i in object.stats){
        let dice1 = Math.floor((Math.random() * 6) + 1);
        let dice2 = Math.floor((Math.random() * 6) + 1);
        let dice3 = Math.floor((Math.random() * 6) + 1);
        object.stats[i] = dice1 + dice2 + dice3;
    }
    return object;
}

const itemsSelection = object => {
    let randomNum = Math.floor(Math.random() * items.length);
    object.item = items[randomNum];
}

const nameSelection = object => {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const consonant = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];
    const lengthOfName = Math.floor((Math.random() * 7) + 1);
    let newName = '';

    let firstLetter = Math.floor((Math.random() * vowels.length));
    newName += vowels[firstLetter];

    for(let i = 0; i < lengthOfName-1; i++){
        if(i%2 === 0){
            let nextLetter = Math.floor((Math.random() * consonant.length));
            newName += consonant[nextLetter];
        } else {
            let newLetter = Math.floor((Math.random() * vowels.length));
            newName += vowels[newLetter];
        }
    }

    object.name = newName;
}

const createNewCharacter = () => {
    stats(newCharacter);
    itemsSelection(newCharacter);
    nameSelection(newCharacter);
    return newCharacter;
}
console.log('new character :', createNewCharacter());



// ### create a "choose your own rpg adventure"
// - generate a character with stats, name, and beginning items
// - stats:
// - strength : how strong the character is based on 3 6-sided dice(3d6)
// - dexterity : how dextrous the character is based on 3 6-sided dice(3d6)
// - intelligence : how smart the character is based on 3 6-sided dice(3d6)
// - charisma : how likable the character is based on 3 6-sided dice(3d6)
// - constitution : how health a character is, based on 3 6-sided dice(3d6)
// - willpower : how wise a character is based on 3 6-sided dice(3d6)
// - name: based on rules such as starts with a vowel, has a consonant, some consonants can repeat, some vowels can repeat
// - has some starting item, each pulled from a random assortment of items
// - helmet/hat
// - chest armor
// - hand armor
// - leg armor
// - necklace
// - 2 rings
// - weapon
// - shield (if the weapon is 1-handed)

