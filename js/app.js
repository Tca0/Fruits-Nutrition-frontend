const getListOfFruits = async () => {
    try{
        const rawData = await fetch('http://localhost:8888/fruits');
        const res = await rawData.json()
        console.log(res,)
        return re
    } catch(err) {
        console.log(err)
    }
}
export {getListOfFruits}