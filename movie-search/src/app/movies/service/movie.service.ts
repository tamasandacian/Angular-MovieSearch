import { Injectable } from '@angular/core';
import { AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { AngularFireAuth } from 'angularfire2/auth';
import { Jsonp, Http } from '@angular/http';

import 'rxjs/Rx';

import { database } from 'firebase/app';
import { Movie } from '../model/movie';
import { AngularFirestore } from 'angularfire2/firestore';


@Injectable()
export class MovieService {

  apiKey: string;
  movies: Observable<Movie[]>;

  baseUrl: string = '';

  results: Object;

  constructor(
    private db: AngularFirestore,
    private afAuth: AngularFireAuth,
    private _jsonp: Jsonp,
    private http: Http


  ) {
    this.apiKey = 'REPLACE_WITH_YOUR_TMDB_API_KEY';
    console.log('MovieService initialized...');
  }



  // Accessing Data From TMDB API KEY
  getPopular() {
    return this._jsonp.get('https://api.themoviedb.org/3/discover/movie?callback=JSONP_CALLBACK&sort_by=popularity.desc&api_key=' + this.apiKey)
      .map(res => res.json());
  }

  getInTheaters() {
    return this._jsonp.get('https://api.themoviedb.org/3/discover/movie?callback=JSONP_CALLBACK&primary_release_date.gte=2016-09-15&primary_release_date.lte=2017-10-04&api_key=' + this.apiKey)
      .map(res => res.json());
  }

  searchMovies(keyword: string) {
    return this._jsonp.get('https://api.themoviedb.org/3/search/movie?callback=JSONP_CALLBACK&query=' + 
    keyword + '&sort_by=popularity.desc&api_key=' + this.apiKey)
      .map(res => res.json());
  }

  searchEntries(keywords: Observable<string>) {
    return keywords.debounceTime(400)
                    .distinctUntilChanged()
                      .switchMap(keyword => this.searchMovies(keyword));
  }

  getMovie(id: string) {
    return this._jsonp.get('https://api.themoviedb.org/3/movie/' + id + '?callback=JSONP_CALLBACK&api_key=' + this.apiKey)
      .map(res => res.json());
  }


  getMoviesByDate(start: string, end: string) {
    return this._jsonp.get('https://api.themoviedb.org/3/discover/movie?callback=JSONP_CALLBACK&primary_release_date.gte=' + start + '&primary_release_date.lte=' + end + '&api_key=' + this.apiKey)
      .map(res => res.json());
  }




}
