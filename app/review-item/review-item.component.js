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
var review_service_1 = require('../review-service/review-service');
var review_tracker_service_1 = require('../review-tracker-service/review-tracker-service');
var ReviewItemComponent = (function () {
    function ReviewItemComponent(reviewService) {
        this.reviewService = reviewService;
    }
    ReviewItemComponent.prototype.ngOnInit = function () {
        this.reviewService.log("ReviewItem initialized for Movie " + this.review.id);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', review_service_1.Review)
    ], ReviewItemComponent.prototype, "review", void 0);
    ReviewItemComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'osl-review-item',
            templateUrl: 'review-item.component.html',
            styleUrls: ['review-item.component.css'],
            providers: [review_tracker_service_1.ReviewService]
        }), 
        __metadata('design:paramtypes', [review_tracker_service_1.ReviewService])
    ], ReviewItemComponent);
    return ReviewItemComponent;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ReviewItemComponent;
//# sourceMappingURL=review-item.component.js.map