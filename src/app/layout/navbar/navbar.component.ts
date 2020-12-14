import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  toggle() {
    // console.log(e);
    var wrapper = document.querySelector("body");
    wrapper.classList.toggle("sb-sidenav-toggled");
  }

}
