import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

import { environment } from './../../environments/environment';
import { Movises } from '../../core/movises';
import { IMovises } from '../../Models/Imovises';
import { VotePercentPipe } from '../../Models/vote-percent-pipe';
import { WatchListService } from '../../core/watch-list-service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, VotePercentPipe, RouterLink],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home implements OnInit {
  responseMovie: IMovises[] = [];
  pages: number[] = [];
  currentPage: number = 1;
  ImgSrc = environment.imageBaseUrl;

  private _Movises = inject(Movises);

  constructor(public WatchList: WatchListService) {}

  ngOnInit(): void {
    this.loadMovie(this.currentPage);
  }

  loadMovie(page: number): void {
    this.currentPage = page;
    this._Movises.getMovie(page).subscribe(response => {
      this.responseMovie = response.results;
      this.pages = Array.from({ length: 4 }, (_, i) => i + 1);
    });
  }

  goToPage(page: number) {
    this.loadMovie(page);
  }

  toggleWishlist(movie: IMovises) {
    if (this.WatchList.isInWishlist(movie.id)) {
      this.WatchList.removeFromWishlist(movie.id);
    } else {
      this.WatchList.addToWishlist(movie);
    }
  }
  
}
