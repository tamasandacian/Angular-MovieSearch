import { Component, OnInit } from '@angular/core';
import { MovieService } from '../service/movie.service';
import { DatePipe } from '@angular/common';
import { Subject } from 'rxjs';
import { Movie } from '../model/movie';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
  providers: [DatePipe]
})
export class MovieListComponent implements OnInit {

  //Select Movie By Rating
  rating: any[];
 // selectedValue: Object = {};
 selectedValue: string;

  popularList: Array<Object>;
  theatherList: Array<Object>;
  ratingList: Array<Object>;
  searchStr: string;
  searchRes: Array<Object>;
  dateRes: Array<Object>;

 

  //Calendar  
  minDate: Date;
  maxDate: Date;

  //Search by Keywords
  results: Array<Object>;//Object;
  searchTerm$ = new Subject<string>();

  constructor(
    private movieService: MovieService,
    private datePipe: DatePipe
  ) {


    //Calendar
    this.minDate = new Date();
    this.maxDate = new Date();

    this.minDate.setDate(this.minDate.getDate() - 1);
    this.maxDate.setDate(this.maxDate.getDate() + 7);
  }

  ngOnInit() {
  
    this.showMostPopularMovies();
    this.showMoviesInTeather();
    this.searchMoviesByKeyWords();

  }

  searchMovies() {
    this.movieService.searchMovies(this.searchStr).subscribe(res => {
      this.searchRes = res.results;
    });
  }

  searchMoviesByKeyWords() {
    this.movieService.searchEntries(this.searchTerm$).subscribe(res => {
      this.results = res.results;
    });
  }


  getRangeValueDates() {

    let a = this.minDate.getFullYear() + "-" + this.minDate.getMonth() + "-" + this.minDate.getDate();
    let b = this.maxDate.getFullYear() + "-" + this.maxDate.getMonth() + "-" + this.maxDate.getDate();

    this.movieService.getMoviesByDate(a, b).subscribe(res => {
      this.dateRes = res.results;
    });
  }

  showMostPopularMovies(){
    this.movieService.getPopular().subscribe(res => {
      this.popularList = res.results;
    });
  }

  showMoviesInTeather() {
    this.movieService.getInTheaters().subscribe(res => {
      this.theatherList = res.results;
    });
  }

 
}



