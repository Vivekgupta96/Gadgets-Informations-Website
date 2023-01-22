
//trending section left side
async function trending() {
    try {
        let trandRequested = await fetch("https://63c79831075b3f3a91cf1581.mockapi.io/trending")
        let TrendData = await trandRequested.json()
        console.log(TrendData)
        displayTrending(TrendData)

    } catch (error) {
        console.log(error)
    }

}
trending()

let leftCont1 = document.getElementById("left-cont1")

function displayTrending(data) {

    data.forEach((ele) => {

        let card = document.createElement("div")
        let images = document.createElement("img")
        images.src = ele.avatar


        let para = document.createElement("p")
        para.innerText = ele.description

        card.append(images, para)
        leftCont1.append(card)
    });

}