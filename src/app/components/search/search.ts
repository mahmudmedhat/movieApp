import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movises } from '../../core/movises';
import { IMovises } from '../../Models/Imovises';
import { environment } from '../../environments/environment';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './search.html',
  styleUrls: ['./search.css']
})
export class SearchComponent implements OnInit {
  searchTerm: string = '';
  results: IMovises[] = [];
  environment = environment;

  private _route = inject(ActivatedRoute);
  private _router = inject(Router);
  private _movises = inject(Movises);

  ngOnInit(): void {
    this._route.queryParams.subscribe(params => {
      this.searchTerm = params['q'] || '';
      if (this.searchTerm) {
        this._movises.searchMovies(this.searchTerm).subscribe({
          next: (res) => {
            this.results = res.results;
            if (this.results.length === 0) {
              this._router.navigate(['/not-found']);
            }
          },
          error: (err) => {
            console.error(err);
            this._router.navigate(['/not-found']);
          }
        });
      } else {
        this.results = [];
      }
    });
  }
}
