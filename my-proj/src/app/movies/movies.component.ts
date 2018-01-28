import { Component } from '@angular/core';



@Component({
  selector: 'movies',
  templateUrl : '/app/movies/movies.component.html'

})
export class MoviesComponent  {

 movieDetails = [
 { name : "Meda mida Abbayi" , url : "https://4.bp.blogspot.com/-2A6Yc7A-7KI/WjjYDrGrivI/AAAAAAAABYQ/h9NBcBLBjAQb0JeBcP8r6ITS6tboeNfhwCLcBGAs/s1600/Meda-Meeda-Abbayi-2017-Telugu-Full-Movie-Watch-Online-Free.jpg" , hero : "Bala Krishna"},
  { name : "Simha" , url : "https://pbs.twimg.com/media/DUnM4b-U8AEQExX?format=jpg&name=900x900" , hero : "Bala Krishna"},
   { name : "MCA" , url : "https://i0.wp.com/movie-rulz.desi/wp-content/uploads/2018/01/MCA-%E2%80%93-Middle-Class-Abbayi-Image.jpg?resize=165%2C220&ssl=1" , hero : "Nani"},
  { name : "Simha" , url : "https://pbs.twimg.com/media/DUnM4b-U8AEQExX?format=jpg&name=900x900" , hero : "Bala Krishna"},
   { name : "C/o Surya" , url : "http://files.prokerala.com/movies/pics/300w/poster-76881.jpg" , hero : "Bala Krishna"},
  { name : "Nannaku prematho" , url : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzv8caz8Fb2duzMqlAAheydsrrf91ugBqZTf7lBuNmdQezsHJc" , hero : "Bala Krishna"}
 ];
 
 name = 'Venkatesh'; 

 }
