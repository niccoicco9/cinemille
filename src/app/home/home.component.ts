import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
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
    'https://api.themoviedb.org/3/movie/now_playing?api_key=ef4dee9234d5be8259e1c861fdd215b6&language=it-IT&page=1').subscribe((data:any) => {
    this.movies = data.results;
    this.movies.forEach((item) => {
      let start = new Date(item.release_date);
      let end = new Date(start);
      end.setMonth(end.getMonth() + 2);

      item.end_date = end.toLocaleDateString();
      item.start_date = start.toLocaleDateString();

      item.startDate = start
      item.endDate =  end

    });
    this.moviesDeep = JSON.parse(JSON.stringify(this.movies));

    });
  }
  onChangeFrom(event:any){
    this.startDateFilter = event.value;
    let elements = this.moviesDeep.filter(item =>{
      return new Date(item.endDate) >= this.startDateFilter;
      
    })
    this.movies = elements;
    console.log(elements)
  }
  onChangeTo(event:any){
    this.endDateFilter = event.value;
    let elements = this.moviesDeep.filter(item =>{
      return new Date(item.startDate) < this.endDateFilter && new Date(item.endDate) > this.startDateFilter;
      //return new Date(item.startDate) >= this.startDateFilter && new Date(item.endDate) <= this.endDateFilter && new Date(item.startDate) <= event.value;

    })
    this.movies = elements
    console.log(elements)
  }
}
