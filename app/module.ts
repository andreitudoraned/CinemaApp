import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import MovieItemComponent from './movie-item/movie-item.component';
import ApplicationComponent from './application/application.component';
import MenubarComponent from './menubar/menubar.component';
import FooterComponent from './footer/footer.component';
import CountySelectorComponent from './movie-selector/movie-selector.component';
import DublinComponent from './movie-selector/dublin/dublin.component';
import MeathComponent from './movie-selector/meath/meath.component';
import KildareComponent from './movie-selector/kildare/kildare.component';
import ScoreComponent from './score/score.component';
import HomeComponent from './home/home.component';
import MovieDetailsComponent from './movie-details/movie-details.component';
import ReviewComponent from './review/review.component'
import ReviewItemComponent from './review-item/review-item.component';
@NgModule({
    imports: [BrowserModule,
      RouterModule.forRoot([
            { path: '', component: HomeComponent },
            { path: 'home', component: HomeComponent },
            { path: 'dublin', component: DublinComponent },
            { path: 'meath', component: MeathComponent },
            { path: 'kildare', component: KildareComponent },
            { path: 'movie-details/:id', component: MovieDetailsComponent},
            { path: '**', component: HomeComponent }
        ])],
    declarations: [ApplicationComponent, MenubarComponent, FooterComponent, CountySelectorComponent, DublinComponent, MeathComponent, KildareComponent, MovieItemComponent, ScoreComponent, HomeComponent, MovieDetailsComponent, ReviewComponent, ReviewItemComponent],
    bootstrap: [ApplicationComponent]
})
export default class AppModule {}
