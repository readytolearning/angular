import { Component , Input } from '@angular/core';
import { DisplayMovieService } from './displaymovie.service'; 



@Component({
  selector: 'displaymovie',
  templateUrl : '/app/displaymovie/displaymovie.component.html'
})
export class DisplayMovieComponent  { 
 year: string;

  constructor(private _displayMovieService: DisplayMovieService) {}

  ngOnInit() {
    this.year = this._displayMovieService.getCreditCard();
  }

name = 'Venkatesh'; 
 movie = { name : "Meda mida Abbayi" , url : "https://4.bp.blogspot.com/-2A6Yc7A-7KI/WjjYDrGrivI/AAAAAAAABYQ/h9NBcBLBjAQb0JeBcP8r6ITS6tboeNfhwCLcBGAs/s1600/Meda-Meeda-Abbayi-2017-Telugu-Full-Movie-Watch-Online-Free.jpg" , hero : "Bala Krishna" , description : "Movie description................"}

}
