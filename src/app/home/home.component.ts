import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userName = "";
  showError = false;
  hearts: any[] = [];
  particles: any[] = [];

  constructor(private router: Router) {}

  ngOnInit() {
    // Golden particles array
    this.particles = Array.from({length: 50});
  }

  startWishes() {
    if(this.userName.trim() === ""){
      this.showError = true;
      return;
    }

    this.showError = false;

    // Random hearts
    this.hearts = Array.from({length: 50}).map(() => ({
      left: Math.random() * 100,
      duration: 3 + Math.random() * 3
    }));

    // Navigate to wishes page after short delay
    setTimeout(() => {
      this.router.navigate(['/wishes'], {
        queryParams: { name: this.userName }
      });
    }, 1500);
  }

}