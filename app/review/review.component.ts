import {Component, Input} from '@angular/core';
import {ReviewService} from '../review-tracker-service/review-tracker-service';
//import {Film} from '../film-service/film-service';
class Config {
    constructor(public brief: string, public type: boolean) {}
}
@Component({
    moduleId:     module.id,
    selector:    'review',
    templateUrl: 'review.component.html',
    providers: [{
            provide: Config,
            useFactory: (brief: boolean, verbose: boolean) => {
                if (brief || verbose) {
                    return new Config('Brief', false);
                }
                else {
                    return new Config('Verbose', true);
                 }
            },
            deps: ["Brief", "Verbose"]
        }
    ]
})

export default class ReviewComponent {

  constructor(private reviewService: ReviewService) {}


  @Input() title: string;
  reviewArray: string[] = [];
  numReviews: number = 0;
  review(review: string): void {
    this.reviewService.log('New '+this.title + ' review: ' + review);
    this.reviewArray.push(review);
    this.numReviews++;
  }
}
