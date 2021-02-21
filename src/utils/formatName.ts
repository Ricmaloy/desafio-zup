const formatName = (name: string) => {
    let names = name.split(' ');
    

    if(names.length === 1) {
        const firstLetter = names[0][0].toUpperCase();
        let othersLetters = names[0].slice(1);

        return `${firstLetter + othersLetters}`;
    } else {
        const firstLetter = names[0][0].toUpperCase();
        const secondLetter = names[1][0].toUpperCase();

        let firstOthers = names[0].slice(1);
        let secondOthers = names[1].slice(1);

        return `${firstLetter + firstOthers} ${secondLetter + secondOthers}`
    }
     
};

export default formatName;