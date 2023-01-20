
let dataNews = [
    {
        img: "../sorces/reviewhtml/iQoo_11_5G_WM-1.avif",
        desc: `	iQoo 11 5G Review: Pro Performance, Premium Price`,
        p1: `Written by Pranav Hegde, 18 January 2023`,
        source: `MOBILES`

            
    },
    {
        img: "../sorces/reviewhtml/small_1673877793372-2.avif",
        desc: `Redmi Note 12 Pro 5G First Impressions: Shouldn’t Be Ignored`,
        p1: `Written by Ishaan Singh, 17 January 2023`,
        source: `MOBILE`

    },
    {
        img: "../sorces/reviewhtml/oneplus_tv-3.avif",
        desc: `OnePlus TV 55 Y1S Pro 55-inch Ultra-HD LED TV Review: Sensibly Priced, Good Software`,
        p1: `by Reuters, 19 January 2023`,
        source: `HOME ENTERTAINMENT`

    },
    {
        img: "../sorces/reviewhtml/4.webp",
        desc: `Fitbit Versa 4 Review: Ordinary Hardware, Excellent Premium Service`,
        p1: `by Reuters, 19 January 2023`,
        source: `WEARABLE`

    },
    {
        img: "../sorces/reviewhtml/5.webp",
        desc: `Avatar: The Way of Water Review: James Cameron Gives Us the Biggest ‘Video Game Movie’ Ever`,
        p1: `Written by Akhil Arora, 15 December 2022`,
        source: `INTERTAINMENT`

    },
    {
        img: "../sorces/reviewhtml/iQoo_11_5G_WM-1.avif",
        desc: `	iQoo 11 5G Review: Pro Performance, Premium Price`,
        p1: `Written by Pranav Hegde, 18 January 2023`,
        source: `MOBILES`

            
    },
    {
        img: "../sorces/reviewhtml/small_1673877793372-2.avif",
        desc: `Redmi Note 12 Pro 5G First Impressions: Shouldn’t Be Ignored`,
        p1: `Written by Ishaan Singh, 17 January 2023`,
        source: `MOBILE`

    },
    {
        img: "../sorces/reviewhtml/oneplus_tv-3.avif",
        desc: `OnePlus TV 55 Y1S Pro 55-inch Ultra-HD LED TV Review: Sensibly Priced, Good Software`,
        p1: `by Reuters, 19 January 2023`,
        source: `HOME ENTERTAINMENT`

    },
    {
        img: "../sorces/reviewhtml/4.webp",
        desc: `Fitbit Versa 4 Review: Ordinary Hardware, Excellent Premium Service`,
        p1: `by Reuters, 19 January 2023`,
        source: `WEARABLE`

    },
    {
        img: "../sorces/reviewhtml/5.webp",
        desc: `Avatar: The Way of Water Review: James Cameron Gives Us the Biggest ‘Video Game Movie’ Ever`,
        p1: `Written by Akhil Arora, 15 December 2022`,
        source: `INTERTAINMENT`

    },
    {
        img: "../sorces/reviewhtml/iQoo_11_5G_WM-1.avif",
        desc: `	iQoo 11 5G Review: Pro Performance, Premium Price`,
        p1: `Written by Pranav Hegde, 18 January 2023`,
        source: `MOBILES`

            
    },
    {
        img: "../sorces/reviewhtml/small_1673877793372-2.avif",
        desc: `Redmi Note 12 Pro 5G First Impressions: Shouldn’t Be Ignored`,
        p1: `Written by Ishaan Singh, 17 January 2023`,
        source: `MOBILE`

    },
    {
        img: "../sorces/reviewhtml/oneplus_tv-3.avif",
        desc: `OnePlus TV 55 Y1S Pro 55-inch Ultra-HD LED TV Review: Sensibly Priced, Good Software`,
        p1: `by Reuters, 19 January 2023`,
        source: `HOME ENTERTAINMENT`

    },
    {
        img: "../sorces/reviewhtml/4.webp",
        desc: `Fitbit Versa 4 Review: Ordinary Hardware, Excellent Premium Service`,
        p1: `by Reuters, 19 January 2023`,
        source: `WEARABLE`

    },
    {
        img: "../sorces/reviewhtml/5.webp",
        desc: `Avatar: The Way of Water Review: James Cameron Gives Us the Biggest ‘Video Game Movie’ Ever`,
        p1: `Written by Akhil Arora, 15 December 2022`,
        source: `INTERTAINMENT`

    }
    
    
    
    
]

let newsCont = document.getElementById("news-cont")

displayNews(dataNews)

function displayNews(data) {

    data.forEach((ele) => {

        let card = document.createElement("div")
        let hori = document.createElement("hr")

        let images = document.createElement("img")
        images.src = ele.img

        let carddiv = document.createElement("div")


        let description = document.createElement("h4")
        description.innerText = ele.desc

        let para = document.createElement("h5")
        para.innerText = ele.p1

        let source = document.createElement("p")
        source.innerText = ele.source

        carddiv.append(description, para, source)
        card.append(images, carddiv)

        newsCont.append(card)
    });

}

// append left section


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

let leftCont = document.getElementById("left-cont1")

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