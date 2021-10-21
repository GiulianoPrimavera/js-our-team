/*  //todo
//-creo l'array di oggetti che rappresentano ciascun membro del team
    //-ogni membro deve avere : Nome completo, ruolo e foto (questo è l'oggetto che deve andare nell'array di oggetti)
-stampo tutte le card del nostro team nel team-container
    
-utiliziamo gli input già presenti nell'html per inserire nuovi membri nel team

*/

//creo l'arrei e lo popolo di oggetto (il team)
const ourTeamArray = [
    {
        nome: "Wayne Barnett",
        role: "Founder & CEO",
        picture: "wayne-barnett-founder-ceo.jpg"
    },
    {
        nome: "Angela Carol",
        role: "Chief Editor",
        picture: "angela-carol-chief-editor.jpg"
    },
    {
        nome: "Walter Gordon",
        role: "Office Manager",
        picture: "walter-gordon-office-manager.jpg"
    },
    {
        nome: "Angela Lopez",
        role: "Social Media Manager",
        picture: "angela-lopez-social-media-manager.jpg"
    },
    {
        nome: "Scott Estrada",
        role: "Developer",
        picture: "scott-estrada-developer.jpg"
    },
    {
        nome: "Barbara Ramos",
        role: "Graphic Designer",
        picture: "barbara-ramos-graphic-designer.jpg"
    },
]

let teamContainer = document.querySelector(".team-container");

function teamCardsGenerator(){
    //ciclo che "scorre" ogni elemento dell'array e lo associa ad una variabile singleMember 
    for (let i = 0; i < ourTeamArray.length; i++ ){
        const singleMember = ourTeamArray[i];
        console.log("il membro del team", singleMember);
        for (let key in singleMember){
            
            console.log(singleMember[key])

        }
    }
    
    //genero l'html nel team-container
    teamContainer += `
    <div class="team-card">
    <div class="card-image">
      <img
        src="img/wayne-barnett-founder-ceo.jpg"
        alt="Wayne Barnett"
      />
    </div>
    <div class="card-text">
      <h3>Wayne Barnett</h3>
      <p>Founder & CEO</p>
    </div>
  </div> 
    `
}

teamCardsGenerator()