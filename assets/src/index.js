import games from "./games.json" assert { type: 'json' };


// a. Logger le premier element du tableau games
    console.log(games[0])
// b. Logger l'annee du 3eme element du tableau games
    console.log(games[2].year)
// c. Logger le titre du dernier element du tableau
    console.log(games[games.length-1].title)

// 1. Ecrire une fonction qui prendre en parametre le tableau games et qui retourne un nouveau tableau de tous les noms de jeux (.title)


const getAllTitles = (arr) => {
    let titles = []

    arr.forEach(game => {
        titles.push(game.title)
    })
    return titles
}

const result = getAllTitles(games);
console.log(result)

// 2. Ecrire une fonction qui prend en parametre une annee et un tableau (games), et qui retourne un nouveau tableau de noms de jeux de l'annee specifiee

const getGamesNamesByYear = (yearParam, arr) =>{
    let res1 = []

    arr.forEach((el) => {
        if(yearParam === el.year){
            res1.push(el.title)
        }
    });

    return res1
}

console.log(getGamesNamesByYear(2020,games))

// 3. Ecrire une fonction qui prend en parametre un tableau (games) retourne un tableau de noms de jeux, a condition que leur note soit superieur ou egal a 8

const getRateGames = (topRate, arr) => {
    let res2 = []

    arr.forEach(el => {
        if ( el.rate >= topRate){
            res2.push(el.title)

        }
    });
    return res2
}

console.log(getRateGames(8,games))


// 4. Ecrire une fonction qui prend en parametre une device et un tableau (games), et qui retourne un nouveau tableau de tous les jeux disponibles sur cette console

const getDeviceUseForGame = (deviceStr, arr) =>{
    let res3 = []

    arr.forEach((el) => {
        if(el.devices.includes(deviceStr)){
            res3.push(el.title)
        }
    });

    return res3
}

console.log(getDeviceUseForGame("Nintendo Switch",games))

const getDeviceWithOneWord = (deviceStrWord, arr) =>{

    let res4 = []

    arr.forEach((game) => {
       for (let i = 0; i < game.devices.length; i++) {
        const element = game.devices[i];
        if(element.includes(deviceStrWord)){
            res4.push(game.title)
            break;
        }
        
       }
    })

    return res4;
}   
console.log(getDeviceWithOneWord('Xbox', games))