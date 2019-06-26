import {Component, Input, OnInit} from '@angular/core';
import {Movie} from '../movie-service/movie-service';
import {ReviewService} from '../review-tracker-service/review-tracker-service';


@Component({
    moduleId:     module.id,
    selector:    'osl-movie-item',
    templateUrl: 'movie-item.component.html',
    styleUrls:  ['movie-item.component.css'],
    providers: [ReviewService]

})


export default class MovieItemComponent implements OnInit{


    constructor(private reviewService: ReviewService) {}
    @Input() movie: Movie;
    public imgUrl: string;

    ngOnInit() {
      this.reviewService.log(`MovieItem initialized for Movie ${this.movie.name}`);
      this.imgUrl= 'app/images/' + this.movie.id + '.jpg';
    }

}
