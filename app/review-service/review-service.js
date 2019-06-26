"use strict";
var Review = (function () {
    function Review(id, name, comment, score) {
        this.id = id;
        this.name = name;
        this.comment = comment;
        this.score = score;
    }
    return Review;
}());
exports.Review = Review;
var ReviewService = (function () {
    function ReviewService() {
    }
    ReviewService.prototype.getReviews = function () {
        var reviews = [
            new Review(0, "John", "Exciting Movie", 4),
            new Review(1, "Andrei", "Meh -_-", 1),
            new Review(2, "Alex", "pretty good!", 4),
            new Review(3, "Luka", "Not bad...", 4),
            new Review(4, "Marco", "Nice...", 1),
            new Review(5, "Sergio", "Awful", 2),
            new Review(6, "Marcelo", "Loved it", 2),
            new Review(7, "Keylor", "AMAZING!!", 5),
            new Review(8, "Dani", "pretty amazing!", 4),
            new Review(9, "Raphael", "good movie", 4),
            new Review(10, "Casemiro", "Nice", 3),
            new Review(11, "Benzema", "i want a refund", 1),
            new Review(12, "Gareth", "Good!!", 5),
            new Review(13, "Francisco", "okay..", 5),
            new Review(14, "Mariano", "It Was good", 3),
            new Review(15, "Denis", "sick!", 3),
            new Review(16, "Toni", "very funny", 5),
            new Review(17, "Marvin", "good!", 4),
        ];
        return reviews;
    };
    return ReviewService;
}());
exports.ReviewService = ReviewService;
//# sourceMappingURL=review-service.js.map