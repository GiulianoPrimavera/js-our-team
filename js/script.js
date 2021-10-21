/*  //todo
//-creo l'array di oggetti che rappresentano ciascun membro del team
    //-ogni membro deve avere : Nome completo, ruolo e foto (questo è l'oggetto che deve andare nell'array di oggetti)
-stampo tutte le card del nostro team nel team-container
    
-utiliziamo gli input già presenti nell'html per inserire nuovi membri nel team

*/

//creo l'arrei e lo popolo di oggetto (il team)
const ourTeamArray = [
    {
        name: "Wayne Barnett",
        role: "Founder & CEO",
        picture: "wayne-barnett-founder-ceo.jpg"
    },
    {
        name: "Angela Carol",
        role: "Chief Editor",
        picture: "angela-carol-chief-editor.jpg"
    },
    {
        name: "Walter Gordon",
        role: "Office Manager",
        picture: "walter-gordon-office-manager.jpg"
    },
    {
        name: "Angela Lopez",
        role: "Social Media Manager",
        picture: "angela-lopez-social-media-manager.jpg"
    },
    {
        name: "Scott Estrada",
        role: "Developer",
        picture: "scott-estrada-developer.jpg"
    },
    {
        name: "Barbara Ramos",
        role: "Graphic Designer",
        picture: "barbara-ramos-graphic-designer.jpg"
    },
]

const teamContainer = document.querySelector(".team-container");

function teamCardsGenerator(){
    //devo creare un ciclo che per ogni oggetto nell'array del team genera un html con i parametri giusti
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