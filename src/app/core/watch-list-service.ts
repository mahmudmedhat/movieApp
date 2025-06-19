import { Injectable } from '@angular/core';
import { IMovises } from '../Models/Imovises';

@Injectable({
  providedIn: 'root'
})
export class WatchListService {
 private WatchList: IMovises[] = [];
  constructor() { }
  
  addToWishlist(movie: any) {
    if (!this.isInWishlist(movie.id)) {
      this.WatchList.push(movie);
    }
  }

  removeFromWishlist(movieId: number) {
    this.WatchList = this.WatchList.filter(m => m.id !== movieId);
  }

  getWishlist(): IMovises[] {
    return this.WatchList;
  }

  isInWishlist(movieId: number): boolean {
    return this.WatchList.some(m => m.id === movieId);
  }
}
