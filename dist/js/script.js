document.addEventListener("DOMContentLoaded", function(){

    let connexion = new MovieDB(); /**appellation de la fonction**/
    connexion.requeteDernierFilm();
})


class MovieDB{ /**commence toujours par une majuscule. Dans une classe, il y a toujours un contructor.**/

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
        for (let i = 0; i < data.length; i++) {
            console.log(data[i].title);
            console.log(data[i].overview);
        }
    }
}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzY3JpcHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24oKXtcclxuXHJcbiAgICBsZXQgY29ubmV4aW9uID0gbmV3IE1vdmllREIoKTsgLyoqYXBwZWxsYXRpb24gZGUgbGEgZm9uY3Rpb24qKi9cclxuICAgIGNvbm5leGlvbi5yZXF1ZXRlRGVybmllckZpbG0oKTtcclxufSlcclxuXHJcblxyXG5jbGFzcyBNb3ZpZURCeyAvKipjb21tZW5jZSB0b3Vqb3VycyBwYXIgdW5lIG1hanVzY3VsZS4gRGFucyB1bmUgY2xhc3NlLCBpbCB5IGEgdG91am91cnMgdW4gY29udHJ1Y3Rvci4qKi9cclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIm5ldyBNb3ZpZURCXCIpO1xyXG4gICAgICAgIHRoaXMuQVBJa2V5ID0gXCJmZTllODE2OGM1ZmQ0NzU4MDBkNDIwOWQ5NzM1OTI2NVwiOyAvKipsYSBjbGUgb2J0ZW51ZSBzdXIgbGUgc2l0ZSoqL1xyXG4gICAgICAgIHRoaXMubGFuZyA9IFwiZnItQ0FcIjtcclxuICAgICAgICB0aGlzLmJhc2VVUkwgPSBcImh0dHBzOi8vYXBpLnRoZW1vdmllZGIub3JnLzMvXCI7XHJcbiAgICAgICAgdGhpcy5pbWdQYXRoID0gXCJodHRwczovL2ltYWdlLnRtZGIub3JnL3QvcC9cIjtcclxuICAgICAgICB0aGlzLm5iRmlsbSA9IDg7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJlcXVldGVEZXJuaWVyRmlsbSgpe1xyXG5cclxuICAgICAgICBsZXQgcmVxdWV0ZSA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpOyAvKipBSkFYPyoqL1xyXG4gICAgICAgIHJlcXVldGUuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRlbmRcIiwgdGhpcy5yZXRvdXJEZXJuaWVyRmlsbS5iaW5kKHRoaXMpICk7XHJcbiAgICAgICAgLy9yZXF1ZXRlLm9wZW4oXCJHRVRcIiwgXCJodHRwczovL2FwaS50aGVtb3ZpZWRiLm9yZy8zL21vdmllL25vd19wbGF5aW5nP2FwaV9rZXk9ZmU5ZTgxNjhjNWZkNDc1ODAwZDQyMDlkOTczNTkyNjUmbGFuZ3VhZ2U9ZnItQ0EmcGFnZT0xXCIpO1xyXG4gICAgICAgIHJlcXVldGUub3BlbihcIkdFVFwiLCB0aGlzLmJhc2VVUkwgKyBcIi9tb3ZpZS9ub3dfcGxheWluZz9hcGlfa2V5PVwiICsgdGhpcy5BUElrZXkgKyBcIiZsYW5ndWFnZT1cIiArIHRoaXMubGFuZyArIFwiJnBhZ2U9MVwiKTtcclxuICAgICAgICByZXF1ZXRlLnNlbmQoKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmV0b3VyRGVybmllckZpbG0oZXZlbnQpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwicmV0b3VyRGVybmllckZpbG1cIik7XHJcbiAgICAgICAgbGV0IHRhcmdldCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XHJcbiAgICAgICAgbGV0IGRhdGEgPSBKU09OLnBhcnNlKHRhcmdldC5yZXNwb25zZVRleHQpLnJlc3VsdHM7XHJcbiAgICAgICAgdGhpcy5hZmZpY2hlckRlcm5pZXJGaWxtKGRhdGEpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBhZmZpY2hlckRlcm5pZXJGaWxtKGRhdGEpe1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhW2ldLnRpdGxlKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YVtpXS5vdmVydmlldyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il0sImZpbGUiOiJzY3JpcHQuanMifQ==
