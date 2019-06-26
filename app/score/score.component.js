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
var ScoreComponent = (function () {
    function ScoreComponent() {
        this.starsEmpty = [];
    }
    ScoreComponent.prototype.ngOnInit = function () {
        if (this.score < 2) {
            this.starsEmpty.push(false, true, true, true, true);
        }
        else if (this.score < 3) {
            this.starsEmpty.push(false, false, true, true, true);
        }
        else if (this.score < 4) {
            this.starsEmpty.push(false, false, false, true, true);
        }
        else if (this.score < 5) {
            this.starsEmpty.push(false, false, false, false, true);
        }
        else if (this.score < 6) {
            this.starsEmpty.push(false, false, false, false, false);
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], ScoreComponent.prototype, "score", void 0);
    ScoreComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'score',
            templateUrl: 'score.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], ScoreComponent);
    return ScoreComponent;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ScoreComponent;
//# sourceMappingURL=score.component.js.map