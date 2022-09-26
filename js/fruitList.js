// import { getListOfFruits } from "./app.js"
const listContainer = document.getElementById('listCardsContainer')

// const listOfData = getListOfFruits()
// function to map data to the page
function showFruitList(list) {
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
// showFruitList(listOfData)

// fetch data from api
const getListOfFruits = async () => {
    try{
        const rawData = await fetch('http://localhost:8888/fruits');
        const res = await rawData.json()
        console.log(res,)
        showFruitList(res)
    } catch(err) {
        console.log(err)
    }
}
getListOfFruits()