const getPuzzle = (wordCount) => {
    return fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`).then((response) => {
        if (response.status === 200) {
            return response.json()
        } else {
            throw new Error('Unable to fetch the puzzle')
        }
    }).then((data) => {
        return data.puzzle
    })
}

// const getPuzzle = (wordCount) => new Promise((resolve, reject) => {
//     //Making an HTTP Request
//     const request = new XMLHttpRequest()

//     request.addEventListener('readystatechange', (e) => {
//         if (e.target.readyState === 4 && e.target.status === 200) {
//             const data = JSON.parse(e.target.responseText)
//             resolve(data.puzzle)
//         } else if (e.target.readyState === 4) {
//             reject('An error has occured')
//         }
//     })

//     request.open('GET', `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`) //sets the request METHOD
//     request.send() //initiates the request
// })

const getCountry = (countryCode) => new Promise((resolve, reject) => {
    const countryRequest = new XMLHttpRequest
    
    countryRequest.open('GET', 'https://restcountries.eu/rest/v2/all')
    countryRequest.send()

        countryRequest.addEventListener('readystatechange', (e) => {
        if (countryRequest.readyState === 4 && countryRequest.status === 200) {
            const data = JSON.parse(e.target.responseText)
            const country = (data.find(item => item.alpha2Code === countryCode))
            resolve(country)
        } else if (e.target.readyState === 4) {
            reject('An error has occured')
        }
    })
})

//Callback
// function getCountry(countryCode, callback) {
//     const countryRequest = new XMLHttpRequest

//     countryRequest.open('GET', 'https://restcountries.eu/rest/v2/all')
//     countryRequest.send()

//         countryRequest.addEventListener('readystatechange', (e) => {
//         if (countryRequest.readyState === 4 && countryRequest.status === 200) {
//             const data = JSON.parse(e.target.responseText)
//             const country = (data.find(item => item.alpha2Code === countryCode))
//             callback(undefined, country)
//         } else if (e.target.readyState === 4) {
//             callback('An error has occured', undefined)
//         }
//     })
// }