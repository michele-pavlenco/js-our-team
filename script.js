const cards = [{
    foto : "img/wayne-barnett-founder-ceo.jpg",
    nome : "Wayne Barrent",
    ruolo : "Founder & CEO"
},
{
    foto : "img/angela-caroll-chief-editor.jpg",
    nome : "Angela Caroll",
    ruolo : "Chief Editor"
},
{
    foto : "img/walter-gordon-office-manager.jpg",
    nome : "Walter Gordon",
    ruolo : "Office Manager"
},
{
    foto : "img/angela-lopez-social-media-manager.jpg",
    nome : "Angela Lopez",
    ruolo : "Social Media Manager"
},
{
    foto : "img/scott-estrada-developer.jpg",
    nome : "Scott Estrada",
    ruolo : "Developer"
},
{
    foto : "img/barbara-ramos-graphic-designer.jpg",
    nome : "Barbara Ramos",
    ruolo : "Graphic Designer"
}
]

const CARDCONTAINER = document.getElementsByClassName("team-container")

const TEAMCARD = document.createElement("div")
TEAMCARD.setAttribute("class", "team-card")

const CARDIMAGE = document.createElement("div")
CARDIMAGE.setAttribute("class", "card-image")

const CARDTEXT = document.createElement("div")
CARDTEXT.setAttribute("class", "card-text")

console.log(CARDTEXT)


// for(let key in cards[0]){
//     console.log(key)
//     console.log(cards[0][key])
// }
// for(let i = 0; i < cards.length; i++){
//     console.log(cards[i].foto)
// }