import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {  Router, RouterLink, RouterLinkActive, RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  imports: [RouterLink,RouterLinkActive,CommonModule,RouterModule,FormsModule],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.css'
})



export class NavBar {
  searchTerm: string = '';

  constructor(private router: Router) {}

  search() {
    if (this.searchTerm.trim()) {
      this.router.navigate(['/search'], {
        queryParams: { q: this.searchTerm }
      });
    }
  }
}
