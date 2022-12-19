import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-storico',
  templateUrl: './storico.component.html',
  styleUrls: ['./storico.component.scss']
})
export class StoricoComponent {
  movies = new Array;
  moviesDeep = new Array;
  startDateFilter:any;
  endDateFilter:any;

  constructor(private http: HttpClient){
    this.loadMovie();
  }
  ngOnInit(){
  
  }
  loadMovie(){
    this.http.get(
      
      'https://api.themoviedb.org/3/discover/movie?api_key=ef4dee9234d5be8259e1c861fdd215b6&language=it-IT&page=1&primary_release_date.gte=2022-01-01&release_date.lte=2022-09-12').subscribe((data:any) => {
      this.movies = data.results;

      });
    }
}
