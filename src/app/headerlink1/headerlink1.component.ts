import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-headerlink1',
  templateUrl: './headerlink1.component.html',
  styleUrls: ['./headerlink1.component.css']
})
export class Headerlink1Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  public onHome() {
    console.log("Hello Home")
    const home = document.querySelector('.navbar-collapse');
    home.classList.remove("show")
  
  }

  public onAbout() {
    const home = document.querySelector('.navbar-collapse');
    home.classList.remove("show")
  }
  public onSignup() {
    const home = document.querySelector('.navbar-collapse');
    home.classList.remove("show")
  }

  public onLogin() {
    const home = document.querySelector('.navbar-collapse');
    home.classList.remove("show") 
  }
}
