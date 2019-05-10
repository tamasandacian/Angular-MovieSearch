import { Component, OnInit } from '@angular/core';
import { MovieService } from '../service/movie.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  movie: Object;
  id: string;

  constructor(
    private movieService: MovieService,
    public router: Router,
    public route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
   // console.log(this.id);
    this.movieService.getMovie(this.id).subscribe(movie => {
     
      this.movie = movie;
     // console.log(this.movie);
    });

    
    


  }

}
