

console.log("Client side js file loaded");

fetch('https://puzzle.mead.io/puzzle').then((response) => {
    response.json().then((data) => {
        console.log(data)
    })
})


// fetch('http://localhost:3000/weather?place=india').then((response) => {
//     response.json().then((data) => {
//         if(data.error){
//             console.log(data.error)
//             return data.error
//         }
//         else{
//             console.log(data)
//             return data
//         }
//     })
// })


// query selector find first occurance of 'form' or 'input' o r 'p' in html/hbs file

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#msg1')
const messageTwo = document.querySelector('#msg2')

messageOne.textContent=''
messageTwo.textContent=''

// console.log(weatherForm);
weatherForm.addEventListener('submit', (e) => {
    // console.log('testing')
    e.preventDefault()
    const location = search.value

    messageOne.textContent = "Loading ..."
    messageTwo.textContent = ""

    const url = "http://localhost:3000/weather?place="+location
    fetch(url).then((response) => {
        response.json().then((data) => {
            if(data.error){
                // console.log(data.error)
                messageOne.textContent = data.error
            }
            else{
                messageOne.textContent = data.location
                messageTwo.textContent = data.status
            }
        })
    })
})


console.log('Testing ..')