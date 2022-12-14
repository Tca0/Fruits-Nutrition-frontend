import { listOfData } from "./app.js"
// need to add .js at the end of the file name otherwise the browser will not recognise it
const listContainer = document.getElementById('listCardsContainer')

// function to map data to the page
function showFruitList(list) {
    // log the data to check if it the function got it
    console.log(list)
    list.forEach(ele => {
        const cardContainer = document.createElement('div')
        cardContainer.setAttribute('id', ele.id)
        const cardHeader = document.createElement('h4')
        cardContainer.appendChild(cardHeader)
        cardHeader.textContent = ele.name
        const cardImage = document.createElement('img')
        cardContainer.appendChild(cardImage)
        console.log(ele.image)
        cardImage.setAttribute('src', 'https://th.bing.com/th/id/R.349e33517dea1c870a30b1550c6479a8?rik=3Mdy%2b9986rcKGg&riu=http%3a%2f%2fwww.alearned.com%2fwp-content%2fuploads%2f2013%2f07%2fApple70753-300x258.jpg&ehk=WOeNaUj%2fogXdjbrV02JSnRJW5SsQI3g31gG3NnPht3Q%3d&risl=&pid=ImgRaw&r=0')
        listContainer.appendChild(cardContainer)
    })
}
showFruitList(listOfData)