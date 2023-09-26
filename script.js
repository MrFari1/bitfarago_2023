class Film{
    constructor(Nev,Ev,Kategoria) {
        this.nev=Nev
        this.ev=Ev
        this.Kategoria=Kategoria
    }
    pont=0;
}

const filmObj={
    1:"The Shawshank Redemption;1994;dráma,bűnözés",
    2:"Pulp Fiction;1994;dráma,bűnözés",
    3:"Inception;2010;sci-fi,akció,thriller",
    4:"The Godfather;1972;bűnözés,dráma",
    5:"The Dark Knight;2008;akció,bűnözés,dráma",
    6:"Forrest Gump;1994;dráma,romantikus",
    7:"The Matrix;1999;sci-fi,akció",
    8:"Jurassic Park;1993;sci-fi,kaland",
    9:"Gladiator;2000;akció,dráma",
    10:"The Lord of the Rings: The Fellowship of the Ring;2001;fantasztikus,kaland",
    11:"Avatar;2009;sci-fi,kaland",
    12:"Spirited Away;2001;animációs,fantasztikus,kaland",
    13:"The Grand Budapest Hotel;2014;vígjáték,bűnözés,dráma",
    14:"Black Panther;2018;sci-fi,akció,kaland",
    15:"La La Land;2016;musical,dráma,romantikus"
}

var jo=new Array();
var nemjo=new Array();
const filmek=new Array();

for (let index = 1; index < 16; index++) {
    let film=filmObj[index].split(';');
    filmek.push(new Film(film[0],film[1],film[2].split(',')))
}

document.getElementsByTagName("input")[0].addEventListener("input",updateKereses);
document.getElementsByTagName("input")[1].addEventListener("input",updateFilter);
document.getElementById("search").addEventListener("click",mainKereses);


for (let index = 0; index < 2; index++) {
    document.getElementsByClassName("dropdown-menu")[index].appendChild
}

function pontAdas(category) {
    filmek.forEach(film => {
        film.Kategoria.forEach(kategori=>{
            if (kategori==category) {
                film.pont++;
            }
        })
    });
}

function pontLevonas(category) {
    filmek.forEach(film => {
        film.Kategoria.forEach(kategori=>{
            if (kategori==category) {
                film.pont--;
            }
        })
    });
}


function filteredSearch(){
    let mode=document.querySelectorAll("input[type='checkbox'][id='jo']:checked")
    mode.forEach(curr => {
        if (curr.checked) {
            pontAdas(curr.value)  
        }
    });
    let mode2=document.querySelectorAll("input[type='checkbox'][id='rossz']:checked")
    mode2.forEach(curr => {
        if (curr.checked) {
            pontLevonas(curr.value)  
        }
    });
}


function createFragment(img,nev,pont) {
    let fragment=new DocumentFragment();
    let div=document.createElement("div")
    div.id="filmCucc"
    pont>0 ? div.style.backgroundColor="green" : pont==0? div.style.backgroundColor="orange" :div.style.backgroundColor="red"
    let kepdiv=document.createElement("div")
    kepdiv.id="filmKep"
    kepdiv.style.backgroundImage="url('kepek/"+img+".jpg"
    let h2=document.createElement("h4")
    h2.innerHTML=nev
    div.appendChild(kepdiv)
    div.appendChild(h2)
    fragment.appendChild(div)
    return fragment;
}


function mainKereses() {
    filteredSearch()
    filmek.sort((a,b) => b.pont - a.pont);
    console.log(filmek);
    filmek.forEach(film => {
        document.getElementById("filmek").appendChild(createFragment(film.nev.split(' ').map(word => word.charAt(0).toLowerCase())
        .join(''),film.nev,film.pont))
    });
}

function updateKereses() {
    console.log("called");
    const kereses = document.getElementsByTagName("input")[0].value.toLowerCase();
    const egyezes=filmek.filter(film=>film.nev.toLowerCase().includes(kereses));
    if (egyezes.length==0) {
        document.getElementById("filmek").innerHTML="NINCS TALÁLAT"
    } else {
        egyezes.forEach(element => {
            document.getElementById("filmek").innerHTML=element.nev
        });
    }
}

function updateFilter() {
    document.getElementsByTagName("input")[1].checked==true ? document.getElementById("dropdowndiv").hidden=false : document.getElementById("dropdowndiv").hidden=true;
}

function loadFilter(){
    let distinct = new Array();
    let ul = document.getElementsByClassName("dropdown-menu");
    filmek.forEach(film => {
        film.Kategoria.forEach(item => {
            if(!distinct.includes(item))
            distinct.push(item)
    });
});
for (let i = 0; i < ul.length; i++) {
    for (let j = 0; j < distinct.length; j++) {
        let label = document.createElement("label");
        let checkbox = document.createElement("input");
        let li = document.createElement("li");
        i==0? checkbox.id="jo" : checkbox.id="rossz";
        checkbox.type = "checkbox";
        checkbox.value = distinct[j];
        label.appendChild(checkbox);
        label.appendChild(document.createTextNode(distinct[j]));
        li.appendChild(label);
        ul[i].appendChild(li);
    }
    console.log(distinct.length)
}
}
document.addEventListener("load",loadFilter());


