import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './nav-bar.html',
  styleUrls: ['./nav-bar.css']
})
export class NavBar {
  private router = inject(Router);

  onSearch(event: Event, query: string) {
    event.preventDefault();
    const trimmedQuery = query.trim();
    if (trimmedQuery) {
      this.router.navigate(['/search'], { queryParams: { q: trimmedQuery } });
    }
  }
}


