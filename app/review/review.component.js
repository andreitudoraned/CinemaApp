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
var review_tracker_service_1 = require('../review-tracker-service/review-tracker-service');
//import {Film} from '../film-service/film-service';
var Config = (function () {
    function Config(brief, type) {
        this.brief = brief;
        this.type = type;
    }
    return Config;
}());
var ReviewComponent = (function () {
    function ReviewComponent(reviewService) {
        this.reviewService = reviewService;
        this.reviewArray = [];
        this.numReviews = 0;
    }
    ReviewComponent.prototype.review = function (review) {
        this.reviewService.log('New ' + this.title + ' review: ' + review);
        this.reviewArray.push(review);
        this.numReviews++;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], ReviewComponent.prototype, "title", void 0);
    ReviewComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'review',
            templateUrl: 'review.component.html',
            providers: [{
                    provide: Config,
                    useFactory: function (brief, verbose) {
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
        }), 
        __metadata('design:paramtypes', [review_tracker_service_1.ReviewService])
    ], ReviewComponent);
    return ReviewComponent;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ReviewComponent;
//# sourceMappingURL=review.component.js.map