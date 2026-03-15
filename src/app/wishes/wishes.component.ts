import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-wishes',
  templateUrl: './wishes.component.html',
  styleUrls: ['./wishes.component.css']
})
export class WishesComponent implements OnInit {

  name = "";
  openGift = false;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(){
    this.route.queryParams.subscribe(params=>{
      this.name = params['name'] || "Someone";
    });
  }

  shareWish(){
    const link = window.location.href;
    const text = "🌙 Eid Mubarak!\n\n" + this.name + " sent you a beautiful Eid wish ❤️\n\n" + link;
    window.open("https://wa.me/?text=" + encodeURIComponent(text), "_blank");
  }

  copyLink(){
    navigator.clipboard.writeText(window.location.href);
    alert("Link Copied! Share it with your friends ❤️");
  }

}