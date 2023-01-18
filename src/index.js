async function ent(){
    let requested= await fetch("https://63c79831075b3f3a91cf1581.mockapi.io/ent")
    let entdata=await requested.json()
    console.log(entdata)
}
ent()
let entel=document.getElementById("ent")

function displayEnt(){

}