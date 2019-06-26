import {Component, Input, OnInit} from '@angular/core';
import {Review} from '../review-service/review-service';
import {ReviewService} from '../review-tracker-service/review-tracker-service';


@Component({
    moduleId:     module.id,
    selector:    'osl-review-item',
    templateUrl: 'review-item.component.html',
    styleUrls:  ['review-item.component.css'],
    providers: [ReviewService]

})


export default class ReviewItemComponent implements OnInit{


    constructor(private reviewService: ReviewService) {}
    @Input() review: Review;

    ngOnInit() {
      this.reviewService.log(`ReviewItem initialized for Movie ${this.review.id}`);
    }

}
