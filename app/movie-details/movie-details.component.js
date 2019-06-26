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
var movie_service_1 = require('../movie-service/movie-service');
var router_1 = require('@angular/router');
var review_service_1 = require('../review-service/review-service');
var MovieDetailsComponent = (function () {
    function MovieDetailsComponent(route) {
        this.route = route;
        this.movies = [];
        this.reviews = [];
        this.tempReviews = [];
        var movieService = new movie_service_1.MovieService();
        this.movies = movieService.getMovies();
        var reviewService = new review_service_1.ReviewService();
        this.reviews = reviewService.getReviews();
    }
    MovieDetailsComponent.prototype.write = function (name, comment, rating) {
        this.reviews.push(new review_service_1.Review(this.id, name, comment, rating));
    };
    MovieDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.id = params['id'];
            console.log('' + _this.id);
        });
        for (var i = 0; i < this.reviews.length; i++) {
            if (this.reviews[i].id == this.id) {
                this.tempReviews.push(this.reviews[i]);
            }
        }
        // this.imgUrl= 'app/images/menus/'+this.id+'.jpg';
    };
    MovieDetailsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'movie-details',
            templateUrl: 'movie-details.component.html',
            styleUrls: ['movie-details.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute])
    ], MovieDetailsComponent);
    return MovieDetailsComponent;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = MovieDetailsComponent;
//# sourceMappingURL=movie-details.component.js.map