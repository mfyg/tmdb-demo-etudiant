document.addEventListener("DOMContentLoaded", function(){

    let connexion = new MovieDB(); /**appellation de la fonction**/
    if(document.location.pathname.search('fiche-film.html') > 0){
        connexion.requeteInfoFilm()

    }else{
        connexion.requeteDernierFilm();
    }
});


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

        let section = document.querySelector('.liste-films');
        for (let i = 0; i <this.totalFilm; i++) {
           // console.log(data[i].title);
           // console.log(data[i].overview);

            let article = document.querySelector(".template .film").cloneNode(true);
            article.querySelector('h2').innerHTML = data[i].title;
           /* if(data[i].overview != ""){
                article.querySelector(".description").innerHTML = data[i].overview
            }else{
                article.querySelector(".description").innerHTML = "Aucune description disponible";
            }*/
            article.querySelector(".description").innerHTML =data[i].overview || "Aucune description disponible";

            let image = article.querySelector('img');
            image.src = this.imgPath + "w300" + data[i].poster_path;

            article.querySelector('a').href = "fiche-film.html?id" +data[i].id; //toujours regarder sur le site movieDB

            section.appendChild(article);
        }
    }

    requeteInfoFilm(movieId){

        let requete = new XMLHttpRequest(); /**AJAX?**/
        requete.addEventListener("loadend", this.retourRequeteInfoFilm.bind(this) );
        requete.open("GET", this.baseURL + "movie/"+ movieId +'?api_key=' + this.APIkey + "&language=" + this.lang + "&page=1");
        requete.send();

    }

    retourRequeteInfoFilm(event){
        let target = event.currentTarget;
        let data = JSON.parse(target.responseText).results;
        this.afficherInfoFilm(data);
    }


    afficherInfoFilm(data){

        document.querySelector('h1').innerHTML = data.title;

        // for (let i = 0; i < this.totalFilm; i++) {
        //
        //     let article = document.querySelector(".template .film").cloneNode(true);
        //     article.querySelector('h2').innerHTML = data[i].title;
        //
        //     article.querySelector(".description").innerHTML =data[i].overview || "Aucune description disponible";
        //
        //     let image = article.querySelector('img');
        //     image.src = this.imgPath + "w300" + data[i].poster_path;
        //
        //     article.querySelector('a').href = "fiche-film.html?id" +data[i].id; //toujours regarder sur le site movieDB
        //
        //     section.appendChild(article);
        // }
    }
}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzY3JpcHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24oKXtcclxuXHJcbiAgICBsZXQgY29ubmV4aW9uID0gbmV3IE1vdmllREIoKTsgLyoqYXBwZWxsYXRpb24gZGUgbGEgZm9uY3Rpb24qKi9cclxuICAgIGlmKGRvY3VtZW50LmxvY2F0aW9uLnBhdGhuYW1lLnNlYXJjaCgnZmljaGUtZmlsbS5odG1sJykgPiAwKXtcclxuICAgICAgICBjb25uZXhpb24ucmVxdWV0ZUluZm9GaWxtKClcclxuXHJcbiAgICB9ZWxzZXtcclxuICAgICAgICBjb25uZXhpb24ucmVxdWV0ZURlcm5pZXJGaWxtKCk7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuXHJcbmNsYXNzIE1vdmllREJ7IC8qKmNvbW1lbmNlIHRvdWpvdXJzIHBhciB1bmUgbWFqdXNjdWxlLiBEYW5zIHVuZSBjbGFzc2UsIGlsIHkgYSB0b3Vqb3VycyB1biBjb25zdHJ1Y3Rvci4qKi9cclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIm5ldyBNb3ZpZURCXCIpO1xyXG4gICAgICAgIHRoaXMuQVBJa2V5ID0gXCJmZTllODE2OGM1ZmQ0NzU4MDBkNDIwOWQ5NzM1OTI2NVwiOyAvKipsYSBjbGUgb2J0ZW51ZSBzdXIgbGUgc2l0ZSoqL1xyXG4gICAgICAgIHRoaXMubGFuZyA9IFwiZnItQ0FcIjtcclxuICAgICAgICB0aGlzLmJhc2VVUkwgPSBcImh0dHBzOi8vYXBpLnRoZW1vdmllZGIub3JnLzMvXCI7XHJcbiAgICAgICAgdGhpcy5pbWdQYXRoID0gXCJodHRwczovL2ltYWdlLnRtZGIub3JnL3QvcC9cIjtcclxuICAgICAgICB0aGlzLm5iRmlsbSA9IDg7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJlcXVldGVEZXJuaWVyRmlsbSgpe1xyXG5cclxuICAgICAgICBsZXQgcmVxdWV0ZSA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpOyAvKipBSkFYPyoqL1xyXG4gICAgICAgIHJlcXVldGUuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRlbmRcIiwgdGhpcy5yZXRvdXJEZXJuaWVyRmlsbS5iaW5kKHRoaXMpICk7XHJcbiAgICAgICAgLy9yZXF1ZXRlLm9wZW4oXCJHRVRcIiwgXCJodHRwczovL2FwaS50aGVtb3ZpZWRiLm9yZy8zL21vdmllL25vd19wbGF5aW5nP2FwaV9rZXk9ZmU5ZTgxNjhjNWZkNDc1ODAwZDQyMDlkOTczNTkyNjUmbGFuZ3VhZ2U9ZnItQ0EmcGFnZT0xXCIpO1xyXG4gICAgICAgIHJlcXVldGUub3BlbihcIkdFVFwiLCB0aGlzLmJhc2VVUkwgKyBcIi9tb3ZpZS9ub3dfcGxheWluZz9hcGlfa2V5PVwiICsgdGhpcy5BUElrZXkgKyBcIiZsYW5ndWFnZT1cIiArIHRoaXMubGFuZyArIFwiJnBhZ2U9MVwiKTtcclxuICAgICAgICByZXF1ZXRlLnNlbmQoKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmV0b3VyRGVybmllckZpbG0oZXZlbnQpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwicmV0b3VyRGVybmllckZpbG1cIik7XHJcbiAgICAgICAgbGV0IHRhcmdldCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XHJcbiAgICAgICAgbGV0IGRhdGEgPSBKU09OLnBhcnNlKHRhcmdldC5yZXNwb25zZVRleHQpLnJlc3VsdHM7XHJcbiAgICAgICAgdGhpcy5hZmZpY2hlckRlcm5pZXJGaWxtKGRhdGEpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBhZmZpY2hlckRlcm5pZXJGaWxtKGRhdGEpe1xyXG5cclxuICAgICAgICBsZXQgc2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saXN0ZS1maWxtcycpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDx0aGlzLnRvdGFsRmlsbTsgaSsrKSB7XHJcbiAgICAgICAgICAgLy8gY29uc29sZS5sb2coZGF0YVtpXS50aXRsZSk7XHJcbiAgICAgICAgICAgLy8gY29uc29sZS5sb2coZGF0YVtpXS5vdmVydmlldyk7XHJcblxyXG4gICAgICAgICAgICBsZXQgYXJ0aWNsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGVtcGxhdGUgLmZpbG1cIikuY2xvbmVOb2RlKHRydWUpO1xyXG4gICAgICAgICAgICBhcnRpY2xlLnF1ZXJ5U2VsZWN0b3IoJ2gyJykuaW5uZXJIVE1MID0gZGF0YVtpXS50aXRsZTtcclxuICAgICAgICAgICAvKiBpZihkYXRhW2ldLm92ZXJ2aWV3ICE9IFwiXCIpe1xyXG4gICAgICAgICAgICAgICAgYXJ0aWNsZS5xdWVyeVNlbGVjdG9yKFwiLmRlc2NyaXB0aW9uXCIpLmlubmVySFRNTCA9IGRhdGFbaV0ub3ZlcnZpZXdcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBhcnRpY2xlLnF1ZXJ5U2VsZWN0b3IoXCIuZGVzY3JpcHRpb25cIikuaW5uZXJIVE1MID0gXCJBdWN1bmUgZGVzY3JpcHRpb24gZGlzcG9uaWJsZVwiO1xyXG4gICAgICAgICAgICB9Ki9cclxuICAgICAgICAgICAgYXJ0aWNsZS5xdWVyeVNlbGVjdG9yKFwiLmRlc2NyaXB0aW9uXCIpLmlubmVySFRNTCA9ZGF0YVtpXS5vdmVydmlldyB8fCBcIkF1Y3VuZSBkZXNjcmlwdGlvbiBkaXNwb25pYmxlXCI7XHJcblxyXG4gICAgICAgICAgICBsZXQgaW1hZ2UgPSBhcnRpY2xlLnF1ZXJ5U2VsZWN0b3IoJ2ltZycpO1xyXG4gICAgICAgICAgICBpbWFnZS5zcmMgPSB0aGlzLmltZ1BhdGggKyBcInczMDBcIiArIGRhdGFbaV0ucG9zdGVyX3BhdGg7XHJcblxyXG4gICAgICAgICAgICBhcnRpY2xlLnF1ZXJ5U2VsZWN0b3IoJ2EnKS5ocmVmID0gXCJmaWNoZS1maWxtLmh0bWw/aWRcIiArZGF0YVtpXS5pZDsgLy90b3Vqb3VycyByZWdhcmRlciBzdXIgbGUgc2l0ZSBtb3ZpZURCXHJcblxyXG4gICAgICAgICAgICBzZWN0aW9uLmFwcGVuZENoaWxkKGFydGljbGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXF1ZXRlSW5mb0ZpbG0obW92aWVJZCl7XHJcblxyXG4gICAgICAgIGxldCByZXF1ZXRlID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7IC8qKkFKQVg/KiovXHJcbiAgICAgICAgcmVxdWV0ZS5hZGRFdmVudExpc3RlbmVyKFwibG9hZGVuZFwiLCB0aGlzLnJldG91clJlcXVldGVJbmZvRmlsbS5iaW5kKHRoaXMpICk7XHJcbiAgICAgICAgcmVxdWV0ZS5vcGVuKFwiR0VUXCIsIHRoaXMuYmFzZVVSTCArIFwibW92aWUvXCIrIG1vdmllSWQgKyc/YXBpX2tleT0nICsgdGhpcy5BUElrZXkgKyBcIiZsYW5ndWFnZT1cIiArIHRoaXMubGFuZyArIFwiJnBhZ2U9MVwiKTtcclxuICAgICAgICByZXF1ZXRlLnNlbmQoKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmV0b3VyUmVxdWV0ZUluZm9GaWxtKGV2ZW50KXtcclxuICAgICAgICBsZXQgdGFyZ2V0ID0gZXZlbnQuY3VycmVudFRhcmdldDtcclxuICAgICAgICBsZXQgZGF0YSA9IEpTT04ucGFyc2UodGFyZ2V0LnJlc3BvbnNlVGV4dCkucmVzdWx0cztcclxuICAgICAgICB0aGlzLmFmZmljaGVySW5mb0ZpbG0oZGF0YSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGFmZmljaGVySW5mb0ZpbG0oZGF0YSl7XHJcblxyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2gxJykuaW5uZXJIVE1MID0gZGF0YS50aXRsZTtcclxuXHJcbiAgICAgICAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnRvdGFsRmlsbTsgaSsrKSB7XHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyAgICAgbGV0IGFydGljbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRlbXBsYXRlIC5maWxtXCIpLmNsb25lTm9kZSh0cnVlKTtcclxuICAgICAgICAvLyAgICAgYXJ0aWNsZS5xdWVyeVNlbGVjdG9yKCdoMicpLmlubmVySFRNTCA9IGRhdGFbaV0udGl0bGU7XHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyAgICAgYXJ0aWNsZS5xdWVyeVNlbGVjdG9yKFwiLmRlc2NyaXB0aW9uXCIpLmlubmVySFRNTCA9ZGF0YVtpXS5vdmVydmlldyB8fCBcIkF1Y3VuZSBkZXNjcmlwdGlvbiBkaXNwb25pYmxlXCI7XHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyAgICAgbGV0IGltYWdlID0gYXJ0aWNsZS5xdWVyeVNlbGVjdG9yKCdpbWcnKTtcclxuICAgICAgICAvLyAgICAgaW1hZ2Uuc3JjID0gdGhpcy5pbWdQYXRoICsgXCJ3MzAwXCIgKyBkYXRhW2ldLnBvc3Rlcl9wYXRoO1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gICAgIGFydGljbGUucXVlcnlTZWxlY3RvcignYScpLmhyZWYgPSBcImZpY2hlLWZpbG0uaHRtbD9pZFwiICtkYXRhW2ldLmlkOyAvL3RvdWpvdXJzIHJlZ2FyZGVyIHN1ciBsZSBzaXRlIG1vdmllREJcclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vICAgICBzZWN0aW9uLmFwcGVuZENoaWxkKGFydGljbGUpO1xyXG4gICAgICAgIC8vIH1cclxuICAgIH1cclxufSJdLCJmaWxlIjoic2NyaXB0LmpzIn0=
