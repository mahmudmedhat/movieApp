import { environment } from './../../environments/environment';
import { Component, inject, OnInit } from '@angular/core';
import { Movises } from '../../core/movises';
import { IMovises } from '../../Models/Imovises';
import { VotePercentPipe } from '../../Models/vote-percent-pipe';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [VotePercentPipe,RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit {
responseMovie:IMovises[]=[]
pages: number[] = [];
currentPage: number = 1;
ImgSrc=environment.imageBaseUrl;
  /*------------------- هنا بستدعي السيرفيس-------------------- */
  private _Movises=inject(Movises)

/*---------------------------- بعمل سبسكريب علي الداتا اللي جيه من السرفيس ------------------------------ */

loadMovie(page:number):void{
    this.currentPage = page;
  this._Movises.getMovie(page).subscribe(response => {
    this.responseMovie = response.results;
  })
  this.pages = Array.from({ length: 4 }, (_, i) => i + 1);

}

goToPage(page: number) {
  this.loadMovie(page);
}


ngOnInit(): void {
this.loadMovie(this.currentPage);
}
}
