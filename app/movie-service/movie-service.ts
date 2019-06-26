export class Movie {
    constructor(public id:number ,public name: string, public category: string, public address: string, public openingHours: string, public city: string, public county: string, public score: number, public image: string) {}

}


export class MovieService {
    getMovies(): Array<Movie> {
        var movies: Array<Movie> = [
        //dublin
          new Movie(0, "The Avengers: Infinity War", "Action", "Church Road, Tyrrelstown , Movies @ Blanchardstown, Dublin", "10pm 11pm 12pm", "Movies @ Blanchardstown", "Dublin", 4.5, "image0.jpg"),
          new Movie(1, "Mama Mia!", "Comedy", "1 West Pier, South Howth Cinema, Dublin", "1pm 2pm 3pm", "South Howth Cinema", "Dublin", 4.5, "image1.jpg"),
          new Movie(2, "Hotel Transylvania", "Animation", "Abbey Street, Dublin", "9pm 12pm", "South Howth Cinema", "Dublin", 4.5, "image2.jpg"),
          new Movie(3, "The Meg", "Action, Thriller","4 East Pier, South Howth Cinema, Dublin", "3pm 5pm 6pm", "Movies @ Blanchardstown", "Dublin", 4, "image3.jpg"),

        //Meath
          new Movie(6, "Christopher Robin", "Comedy", "Emmet Street North Trim Theater, Meath", "4pm 8pm", "North Trim Theater", "Meath", 5, "image6.jpg"),
          new Movie(7, "Incredibles 2", "Animation","Emmet House, Finnegans Way, North Trim Theater, Meath", "3pm 4pm 7pm", "North Trim Theater", "Meath", 4.2, "image7.jpg"),
          new Movie(8, "Deadpool 2", "Action","The Coachyard, Enfield Cinemas, Meath", "8pm 9pm", "Enfield Cinemas", "Meath", 4, "image8.jpg"),
          new Movie(9, "Jurassic World", "Action","Main Street, Enfield Cinemas, Meath", "5pm 10pm", "Enfield Cinemas", "Meath", 3.7, "image9.jpg"),

        //kildare
          new Movie(13, "Aquaman", "Action", "Main Street, Maynooth, Kildare, Maynooth Cinema Hall", "8pm 10pm", "Maynooth Cinema Hall", "Kildare", 4.0, "image13.jpg"),
          new Movie(14, "Ready Player One", "Action", "Main St, Maynooth, Maynooth Cinema Hall", "4:30pm 6pm", "Maynooth Cinema Hall", "Kildare", 3.5, "image14.jpg"),
          new Movie(15, "The First Purge", "Thriller", "13 The Harbour, Kilcock", "4pm 5pm", "Kilcock Theaters", "Kildare", 3.0, "image15.jpg"),
          new Movie(16, "SOLO", "Action, Adventure", "Above Daveys Pub, Bridge Street, Kilcock", "1pm 4pm 5pm", "Kilcock Theaters", "Kildare", 2.0, "image16.jpg"),


        ];
        return movies;
    }


}
