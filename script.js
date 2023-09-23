class Film{
    constructor(Nev,Ev,Kategoria) {
        this.nev=Nev
        this.ev=Ev
        this.Kategoria=Kategoria
    }
}

const filmObj={
    1:"The Shawshank Redemption;1994;dráma,bűnözés",
    2:"Pulp Fiction;1994;,dráma,bűnözés",
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

const filmek=new Array();

for (let index = 1; index < 16; index++) {
    let film=filmObj[index].split(';');
    filmek.push(new Film(film[0],film[1],film[2].split(',')))
}

document.getElementsByTagName("input")[0].addEventListener("input",updateKereses);
document.getElementsByTagName("input")[1].addEventListener("input",updateFilter);

function updateKereses() {
    console.log("called");
    const kereses = document.getElementsByTagName("input")[0].value.toLowerCase();
    const egyezes=filmek.filter(film=>film.nev.toLowerCase().includes(kereses));
    console.log(egyezes);
}

function updateFilter() {
    document.getElementsByTagName("input")[1].checked==true ? document.getElementById("dropdowndiv").hidden=false : document.getElementById("dropdowndiv").hidden=true;
}





