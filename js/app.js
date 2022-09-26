const getListOfFruits = async () => {
    try{
        const rawData = await fetch('http://localhost:8888/fruits');
        const res = await rawData.json()
        return res
    } catch(err) {
        console.log(err)
    }
}
const listOfData = await getListOfFruits()
console.log("from app the list:\n", listOfData);
export { listOfData };