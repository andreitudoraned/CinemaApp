// Implement ScoreComponent here.
import {Movie} from '../movie-service/movie-service';
import {Component, Input, OnInit} from '@angular/core';

@Component({
    moduleId:     module.id,
    selector:    'score',
    templateUrl: 'score.component.html'
})
export default class ScoreComponent implements OnInit{
  @Input() score: number;
  starsEmpty: boolean[] = [];
  ngOnInit() {
    if(this.score < 2) {
      this.starsEmpty.push(false, true, true, true, true);

    } else if(this.score < 3){
      this.starsEmpty.push(false, false, true, true, true);

    } else if(this.score < 4) {
      this.starsEmpty.push(false, false, false, true, true);
    } else if(this.score < 5) {
      this.starsEmpty.push(false, false, false, false, true);
    } else if(this.score < 6) {
      this.starsEmpty.push(false, false, false, false, false);
    }
  }


}
