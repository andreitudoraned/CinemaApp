"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var movie_service_1 = require('../../movie-service/movie-service');
var KildareComponent = (function () {
    function KildareComponent() {
        this.movies = [];
        this.tempMovies = [];
        this.filterArray = [];
        var movieService = new movie_service_1.MovieService();
        this.movies = movieService.getMovies();
        this.cityFilter = "";
    }
    KildareComponent.prototype.ngOnInit = function () {
        for (var i = 0; i < this.movies.length; i++) {
            if (this.movies[i].county == "Kildare") {
                this.tempMovies.push(this.movies[i]);
            }
        }
    };
    //city id = 1, food = 2 etc...
    KildareComponent.prototype.filter = function (value, id) {
        //================ city filter was added ========================================
        if (id == 1) {
            //stop duplicates
            this.tempMovies.length = 0;
            this.cityFilter = value;
            this.filterArray.push(value);
            console.log(value);
            for (var i = 0; i < this.movies.length; i++) {
                if (this.movies[i].city == value) {
                    console.log("Added: " + this.movies[i].name);
                    this.tempMovies.push(this.movies[i]);
                }
            }
            //remove items that arent part of filters
            for (var k = this.tempMovies.length - 1; k >= 0; k--) {
                console.log("index: " + k);
                if (this.tempMovies[k].city != value) {
                    console.log("Spliced: " + this.tempMovies[k].name);
                    this.tempMovies.splice(k, 1);
                }
            }
        }
        //this.displayMovies(this.cityFilter, this.foodFilter, this.priceFilter);
    };
    KildareComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'kildare-movies',
            templateUrl: 'kildare.component.html',
            styleUrls: ['kildare.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], KildareComponent);
    return KildareComponent;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = KildareComponent;
//# sourceMappingURL=kildare.component.js.map