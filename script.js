const cards = [
    {
        foto: "img/wayne-barnett-founder-ceo.jpg",
        nome: "Wayne Barrent",
        ruolo: "Founder & CEO"
    },
    {
        foto: "img/angela-caroll-chief-editor.jpg",
        nome: "Angela Caroll",
        ruolo: "Chief Editor"
    },
    {
        foto: "img/walter-gordon-office-manager.jpg",
        nome: "Walter Gordon",
        ruolo: "Office Manager"
    },
    {
        foto: "img/angela-lopez-social-media-manager.jpg",
        nome: "Angela Lopez",
        ruolo: "Social Media Manager"
    },
    {
        foto: "img/scott-estrada-developer.jpg",
        nome: "Scott Estrada",
        ruolo: "Developer"
    },
    {
        foto: "img/barbara-ramos-graphic-designer.jpg",
        nome: "Barbara Ramos",
        ruolo: "Graphic Designer"
    }
];

// const CARDCONTAINER = document.getElementsByClassName("team-container")

// const TEAMCARD = document.createElement("div")
// TEAMCARD.setAttribute("class", "team-card");
// //TEAMCARD.append(CARDCONTAINER)
// //CARDCONTAINER.textContent = TEAMCARD
// //CARDCONTAINER.innerHTML = TEAMCARD

// const CARDIMAGE = document.createElement("div")
// CARDIMAGE.setAttribute("class", "card-image")

// const CARDTEXT = document.createElement("div")
// CARDTEXT.setAttribute("class", "card-text")

// console.log(CARDCONTAINER, TEAMCARD)

// for (let i = 0; i < cards.length; i++) {

// }


// let miaStringa  = 'ABC';


// miaStringa += 'XYZ';



// for(let key in cards[0]){
//     console.log(key)
//     console.log(cards[0][key])
// }
// for(let i = 0; i < cards.length; i++){
//     console.log(cards[i].foto)
// }
const CARDCONTAINER = document.getElementsByClassName("team-container");

for (let i = 0; i < cards.length; i++) {
    CARDCONTAINER.innerHTML += `
    <div class="team-card"> 
          <div class="card-image"> 
            <img src="${cards[i].foto}" />
          </div>
          <div class="card-text"> 
          <h3>${cards.nome}</h3>
          <p>Founder & CEO</p>
        </div>
      </div>
        </div>`
        console.log(CARDCONTAINER)
    console.log(cards[i].foto);
    console.log(cards[i].nome);
}

