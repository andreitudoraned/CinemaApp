import {Component, OnInit} from '@angular/core';
import {Movie, MovieService} from '../../movie-service/movie-service';

@Component({
  moduleId: module.id,
   selector: 'meath-movies',
   templateUrl: 'meath.component.html',
   styleUrls:  ['meath.component.css']
})
export default class MeathComponent implements OnInit{

  movies: Array<Movie> = [];
  tempMovies: Array<Movie> = [];
  filterArray: string[] = [];
  cityFilter: string;

  constructor() {
      let movieService = new MovieService();
      this.movies = movieService.getMovies();
      this.cityFilter = "";

  }

  ngOnInit() {
    for(var i = 0; i < this.movies.length; i++) {
      if(this.movies[i].county == "Meath") {
        this.tempMovies.push(this.movies[i]);
      }
    }
  }

      //city id = 1, food = 2 etc...
      filter(value: string, id:number): void {
        //================ city filter was added ========================================


        if(id == 1) {

          //stop duplicates
          this.tempMovies.length = 0;
          this.cityFilter = value;
          this.filterArray.push(value);
          console.log(value);
          for(var i = 0; i<this.movies.length; i++){
            if(this.movies[i].city == value) {

              console.log("Added: " +this.movies[i].name);
                this.tempMovies.push(this.movies[i]);

            }
          }
          //remove items that arent part of filters
          for(var k = this.tempMovies.length-1; k>=0; k--){
            console.log("index: " + k);
            if(this.tempMovies[k].city != value) {
                console.log("Spliced: " +this.tempMovies[k].name);
                this.tempMovies.splice(k, 1);
            }
          }
          //====================== food filter was added =======================================
        } 

        //this.displayMovies(this.cityFilter, this.foodFilter, this.priceFilter);

      }




}
