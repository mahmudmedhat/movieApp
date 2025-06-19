import { Component } from '@angular/core';
import { WatchListService } from '../../core/watch-list-service';
import { IMovises } from '../../Models/Imovises';
import { VotePercentPipe } from '../../Models/vote-percent-pipe';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-watch-list',
  imports: [CommonModule,VotePercentPipe],
  templateUrl: './watch-list.html',
  styleUrl: './watch-list.css'
})
export class WatchList {
constructor(public watchListService: WatchListService) {}

  get movies(): IMovises[] {
    return this.watchListService.getWishlist();
  }

  removeFromWatchlist(id: number) {
    this.watchListService.removeFromWishlist(id);
  }
}
