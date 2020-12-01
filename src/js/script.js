document.addEventListener("DOMContentLoaded", function(){

    let connexion = new MovieDB(); /**appellation de la fonction**/
    connexion.requeteDernierFilm();
})


class MovieDB{ /**commence toujours par une majuscule. Dans une classe, il y a toujours un constructor.**/

    constructor() {
        console.log("new MovieDB");
        this.APIkey = "fe9e8168c5fd475800d4209d97359265"; /**la cle obtenue sur le site**/
        this.lang = "fr-CA";
        this.baseURL = "https://api.themoviedb.org/3/";
        this.imgPath = "https://image.tmdb.org/t/p/";
        this.nbFilm = 8;

    }

    requeteDernierFilm(){

        let requete = new XMLHttpRequest(); /**AJAX?**/
        requete.addEventListener("loadend", this.retourDernierFilm.bind(this) );
        //requete.open("GET", "https://api.themoviedb.org/3/movie/now_playing?api_key=fe9e8168c5fd475800d4209d97359265&language=fr-CA&page=1");
        requete.open("GET", this.baseURL + "/movie/now_playing?api_key=" + this.APIkey + "&language=" + this.lang + "&page=1");
        requete.send();

    }

    retourDernierFilm(event){
        console.log("retourDernierFilm");
        let target = event.currentTarget;
        let data = JSON.parse(target.responseText).results;
        this.afficherDernierFilm(data);
    }


    afficherDernierFilm(data){

        let section = document.querySelector(".liste-films");
        for (let i = 0; i <this.totalFilm; i++) {
           // console.log(data[i].title);
           // console.log(data[i].overview);

            let article = document.querySelector(".template .film").cloneNode(true);
            article.querySelector("h2").innerHTML = data[i].title;
           /* if(data[i].overview != ""){
                article.querySelector(".description").innerHTML = data[i].overview
            }else{
                article.querySelector(".description").innerHTML = "Aucune description disponible";
            }*/

            article.querySelector(".description").innerHTML =data[i].overview || "Aucune description disponible";
            let image = article.querySelector("img");
            image.src = this.imgPath + "w300" + data[i].poster_path;

            section.appendChild(article);
        }
    }
}