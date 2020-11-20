//async await is ideal for promise chaining, more readable and organised
const getPuzzle = async (wordCount) => { 
    const response = await fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    
    if (response.status === 200) {
        const data = await response.json()
        return data.puzzle
    } else {
        throw new Error('Unable to get puzzle')
    }
}

//getCountry with the Fetch API
const getCountry = async (countryCode) => {
    const response = await fetch('http://restcountries.eu/rest/v2/all')

    if (response.status === 200) {
        const data = await response.json()
        return data.find(item => item.alpha2Code === countryCode)

    } else {
        throw new Error('Unable to fetch data')
    }
}

// const getCountryOld = (countryCode) => {
//     return fetch('http://restcountries.eu/rest/v2/all').then((response) => {
//         if (response.status === 200) {
//             return response.json()
//         } else {
//             throw new Error('Unable to fetch data')
//         }
//     }).then((data) => {
//         return data.find(item => item.alpha2Code === countryCode)
//     })
// }

//Fetching locationData through ipinfo API

const getLocation = async () => {
    const response = await fetch('http://ipinfo.io/?token=7277e763e54404')

    if (response.status === 200) {
        const data = await response.json()
        console.log(data)
        return data
    } else {
        throw new Error('Unable to fetch data')
    }
}



// getLocationOld = () => {
//     return fetch('http://ipinfo.io/?token=7277e763e54404').then((response) => {
//         if (response.status === 200) {
//             return response.json()
//         } else {
//             throw new Error('Unable to fetch info')
//         }
//     }).then((data) => {
//         console.log(data)
//         return data
//     })
// }