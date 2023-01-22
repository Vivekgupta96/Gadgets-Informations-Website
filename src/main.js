async function ent() {
    try {
        let requested = await fetch("https://63c79831075b3f3a91cf1581.mockapi.io/ent")
        let entdata = await requested.json()
        // console.log(entdata)
        displayEnt(entdata)

    }
    catch (error) {
        console.log(error)
    }

}
ent()

// getting dom element

let entEl = document.getElementById("ent")

let leftCont = document.getElementById("left-cont1")



function displayEnt(data) {

    data.forEach((ele) => {

        let card = document.createElement("div")
        let images = document.createElement("img")
        images.src = ele.imgage

        let para = document.createElement("p")
        para.innerText = ele.desc

        card.append(images, para)
        entEl.append(card)
    });

}

//trending section
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


function displayTrending(data) {

    data.forEach((ele) => {

        let card = document.createElement("div")
        let images = document.createElement("img")
        images.src = ele.avatar


        let para = document.createElement("p")
        para.innerText = ele.description

        card.append(images, para)
        leftCont.append(card)
    });

}


// for serch bar section




let search = document.getElementById("search")
let serchdiv = document.getElementById("serchdiv")

search.addEventListener("click", () => {

    serchdiv.toggle("#serchdivdisplay")

})






