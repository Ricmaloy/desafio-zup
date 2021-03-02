
// Formata a localização do usuário fazendo com que a(s) primeira(s) da cidade
// sejam maiúsculas assim como a sigla do Estado
const formatLocation = (location: string) => {
    const [city, state] = location.split(' - ');

    let cityNames = city.split(' ');
    

    if(cityNames.length === 1) {
        const firstCityLetters = cityNames[0][0].toUpperCase();
        let othersCityLetters = cityNames[0].slice(1);

        return `${firstCityLetters + othersCityLetters} - ${state.toUpperCase()}`;
    } else {
        const firstCityName = cityNames[0][0].toUpperCase();
        const secondCityName = cityNames[1][0].toUpperCase();

        let firstOthers = cityNames[0].slice(1);
        let secondOthers = cityNames[1].slice(1);

        return `${firstCityName + firstOthers} ${secondCityName + secondOthers} - ${state.toUpperCase()}`;
    };
};

export default formatLocation;