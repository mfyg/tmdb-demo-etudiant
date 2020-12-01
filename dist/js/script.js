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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzY3JpcHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24oKXtcclxuXHJcbiAgICBsZXQgY29ubmV4aW9uID0gbmV3IE1vdmllREIoKTsgLyoqYXBwZWxsYXRpb24gZGUgbGEgZm9uY3Rpb24qKi9cclxuICAgIGNvbm5leGlvbi5yZXF1ZXRlRGVybmllckZpbG0oKTtcclxufSlcclxuXHJcblxyXG5jbGFzcyBNb3ZpZURCeyAvKipjb21tZW5jZSB0b3Vqb3VycyBwYXIgdW5lIG1hanVzY3VsZS4gRGFucyB1bmUgY2xhc3NlLCBpbCB5IGEgdG91am91cnMgdW4gY29uc3RydWN0b3IuKiovXHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJuZXcgTW92aWVEQlwiKTtcclxuICAgICAgICB0aGlzLkFQSWtleSA9IFwiZmU5ZTgxNjhjNWZkNDc1ODAwZDQyMDlkOTczNTkyNjVcIjsgLyoqbGEgY2xlIG9idGVudWUgc3VyIGxlIHNpdGUqKi9cclxuICAgICAgICB0aGlzLmxhbmcgPSBcImZyLUNBXCI7XHJcbiAgICAgICAgdGhpcy5iYXNlVVJMID0gXCJodHRwczovL2FwaS50aGVtb3ZpZWRiLm9yZy8zL1wiO1xyXG4gICAgICAgIHRoaXMuaW1nUGF0aCA9IFwiaHR0cHM6Ly9pbWFnZS50bWRiLm9yZy90L3AvXCI7XHJcbiAgICAgICAgdGhpcy5uYkZpbG0gPSA4O1xyXG5cclxuICAgIH1cclxuXHJcbiAgICByZXF1ZXRlRGVybmllckZpbG0oKXtcclxuXHJcbiAgICAgICAgbGV0IHJlcXVldGUgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTsgLyoqQUpBWD8qKi9cclxuICAgICAgICByZXF1ZXRlLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkZW5kXCIsIHRoaXMucmV0b3VyRGVybmllckZpbG0uYmluZCh0aGlzKSApO1xyXG4gICAgICAgIC8vcmVxdWV0ZS5vcGVuKFwiR0VUXCIsIFwiaHR0cHM6Ly9hcGkudGhlbW92aWVkYi5vcmcvMy9tb3ZpZS9ub3dfcGxheWluZz9hcGlfa2V5PWZlOWU4MTY4YzVmZDQ3NTgwMGQ0MjA5ZDk3MzU5MjY1Jmxhbmd1YWdlPWZyLUNBJnBhZ2U9MVwiKTtcclxuICAgICAgICByZXF1ZXRlLm9wZW4oXCJHRVRcIiwgdGhpcy5iYXNlVVJMICsgXCIvbW92aWUvbm93X3BsYXlpbmc/YXBpX2tleT1cIiArIHRoaXMuQVBJa2V5ICsgXCImbGFuZ3VhZ2U9XCIgKyB0aGlzLmxhbmcgKyBcIiZwYWdlPTFcIik7XHJcbiAgICAgICAgcmVxdWV0ZS5zZW5kKCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJldG91ckRlcm5pZXJGaWxtKGV2ZW50KXtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInJldG91ckRlcm5pZXJGaWxtXCIpO1xyXG4gICAgICAgIGxldCB0YXJnZXQgPSBldmVudC5jdXJyZW50VGFyZ2V0O1xyXG4gICAgICAgIGxldCBkYXRhID0gSlNPTi5wYXJzZSh0YXJnZXQucmVzcG9uc2VUZXh0KS5yZXN1bHRzO1xyXG4gICAgICAgIHRoaXMuYWZmaWNoZXJEZXJuaWVyRmlsbShkYXRhKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgYWZmaWNoZXJEZXJuaWVyRmlsbShkYXRhKXtcclxuXHJcbiAgICAgICAgbGV0IHNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxpc3RlLWZpbG1zXCIpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDx0aGlzLnRvdGFsRmlsbTsgaSsrKSB7XHJcbiAgICAgICAgICAgLy8gY29uc29sZS5sb2coZGF0YVtpXS50aXRsZSk7XHJcbiAgICAgICAgICAgLy8gY29uc29sZS5sb2coZGF0YVtpXS5vdmVydmlldyk7XHJcblxyXG4gICAgICAgICAgICBsZXQgYXJ0aWNsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGVtcGxhdGUgLmZpbG1cIikuY2xvbmVOb2RlKHRydWUpO1xyXG4gICAgICAgICAgICBhcnRpY2xlLnF1ZXJ5U2VsZWN0b3IoXCJoMlwiKS5pbm5lckhUTUwgPSBkYXRhW2ldLnRpdGxlO1xyXG4gICAgICAgICAgIC8qIGlmKGRhdGFbaV0ub3ZlcnZpZXcgIT0gXCJcIil7XHJcbiAgICAgICAgICAgICAgICBhcnRpY2xlLnF1ZXJ5U2VsZWN0b3IoXCIuZGVzY3JpcHRpb25cIikuaW5uZXJIVE1MID0gZGF0YVtpXS5vdmVydmlld1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIGFydGljbGUucXVlcnlTZWxlY3RvcihcIi5kZXNjcmlwdGlvblwiKS5pbm5lckhUTUwgPSBcIkF1Y3VuZSBkZXNjcmlwdGlvbiBkaXNwb25pYmxlXCI7XHJcbiAgICAgICAgICAgIH0qL1xyXG5cclxuICAgICAgICAgICAgYXJ0aWNsZS5xdWVyeVNlbGVjdG9yKFwiLmRlc2NyaXB0aW9uXCIpLmlubmVySFRNTCA9ZGF0YVtpXS5vdmVydmlldyB8fCBcIkF1Y3VuZSBkZXNjcmlwdGlvbiBkaXNwb25pYmxlXCI7XHJcbiAgICAgICAgICAgIGxldCBpbWFnZSA9IGFydGljbGUucXVlcnlTZWxlY3RvcihcImltZ1wiKTtcclxuICAgICAgICAgICAgaW1hZ2Uuc3JjID0gdGhpcy5pbWdQYXRoICsgXCJ3MzAwXCIgKyBkYXRhW2ldLnBvc3Rlcl9wYXRoO1xyXG5cclxuICAgICAgICAgICAgc2VjdGlvbi5hcHBlbmRDaGlsZChhcnRpY2xlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXSwiZmlsZSI6InNjcmlwdC5qcyJ9
