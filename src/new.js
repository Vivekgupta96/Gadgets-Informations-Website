
let dataNews = [
    {
        img: "../sorces/newsHtml/tesla_img-1.jfif",
        desc: `	
        	
Tesla Shareholder Trial: US Jury Told That Elon Musk's 'Lies' Cost Tesla Investors Millions`,
        p1: `by Agence France-Presse, 19 January 2023`,
        source: `ITRANSPORTATION`


    },
    {
        img: "../sorces/newsHtml/amazon_reuters_full_1561527266452-last.webp",
        desc: `	
        Amazon to Cut Jobs in US, Canada, Costa Rica as Part of Mass Layoffs`,
        p1: `by Reuters, 19 January 2023`,
        source: `INTERNATE`

    },
    {
        img: "../sorces/newsHtml/Wikipedia_large_1674123853883-2.webp",
        desc: `	
        	
Wikipedia Introduces First Desktop Redesign in a Decade, Brings New Table of Contents for Better Navigation`,
        p1: `by Reuters, 19 January 2023`,
        source: `INTERNATE`

    },
    {
        img: "../sorces/newsHtml/European_parliament_new_cover_unsplash_large_1648808192337-6.webp",
        desc: `	
        MiCA Crypto Law for EU Members Delayed by Up to 18 Months: All Details`,
        p1: `by Reuters, 19 January 2023`,
        source: `CRYPTOCURRENCY`

    },
    {
        img: "../sorces/newsHtml/samsung_galaxy_s22_ultra_india_1672305189126-5.webp",
        desc: `	
        	
Samsung Galaxy S23 Series to Be Powered by Custom Overclocked Snapdragon 8 Gen 2 Soc: Report`,
        p1: `by Reuters, 19 January 2023`,
        source: `MOBILE`

    },
    {
        img: "../sorces/newsHtml/tesla_img-1.jfif",
        desc: `	
        	
Tesla Shareholder Trial: US Jury Told That Elon Musk's 'Lies' Cost Tesla Investors Millions`,
        p1: `by Agence France-Presse, 19 January 2023`,
        source: `ITRANSPORTATION`


    },
    {
        img: "../sorces/newsHtml/amazon_reuters_full_1561527266452-last.webp",
        desc: `	
        Amazon to Cut Jobs in US, Canada, Costa Rica as Part of Mass Layoffs`,
        p1: `by Reuters, 19 January 2023`,
        source: `INTERNATE`

    },
    {
        img: "../sorces/newsHtml/Wikipedia_large_1674123853883-2.webp",
        desc: `	
        	
Wikipedia Introduces First Desktop Redesign in a Decade, Brings New Table of Contents for Better Navigation`,
        p1: `by Reuters, 19 January 2023`,
        source: `INTERNATE`

    },
    {
        img: "../sorces/newsHtml/European_parliament_new_cover_unsplash_large_1648808192337-6.webp",
        desc: `	
        MiCA Crypto Law for EU Members Delayed by Up to 18 Months: All Details`,
        p1: `by Reuters, 19 January 2023`,
        source: `CRYPTOCURRENCY`

    },
    {
        img: "../sorces/newsHtml/samsung_galaxy_s22_ultra_india_1672305189126-5.webp",
        desc: `	
        	
Samsung Galaxy S23 Series to Be Powered by Custom Overclocked Snapdragon 8 Gen 2 Soc: Report`,
        p1: `by Reuters, 19 January 2023`,
        source: `MOBILE`

    },{
        img: "../sorces/newsHtml/tesla_img-1.jfif",
        desc: `	
        	
Tesla Shareholder Trial: US Jury Told That Elon Musk's 'Lies' Cost Tesla Investors Millions`,
        p1: `by Agence France-Presse, 19 January 2023`,
        source: `ITRANSPORTATION`


    },
    {
        img: "../sorces/newsHtml/amazon_reuters_full_1561527266452-last.webp",
        desc: `	
        Amazon to Cut Jobs in US, Canada, Costa Rica as Part of Mass Layoffs`,
        p1: `by Reuters, 19 January 2023`,
        source: `INTERNATE`

    },
    {
        img: "../sorces/newsHtml/Wikipedia_large_1674123853883-2.webp",
        desc: `	
        	
Wikipedia Introduces First Desktop Redesign in a Decade, Brings New Table of Contents for Better Navigation`,
        p1: `by Reuters, 19 January 2023`,
        source: `INTERNATE`

    },
    {
        img: "../sorces/newsHtml/European_parliament_new_cover_unsplash_large_1648808192337-6.webp",
        desc: `	
        MiCA Crypto Law for EU Members Delayed by Up to 18 Months: All Details`,
        p1: `by Reuters, 19 January 2023`,
        source: `CRYPTOCURRENCY`

    },
    {
        img: "../sorces/newsHtml/samsung_galaxy_s22_ultra_india_1672305189126-5.webp",
        desc: `	
        	
Samsung Galaxy S23 Series to Be Powered by Custom Overclocked Snapdragon 8 Gen 2 Soc: Report`,
        p1: `by Reuters, 19 January 2023`,
        source: `MOBILE`

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