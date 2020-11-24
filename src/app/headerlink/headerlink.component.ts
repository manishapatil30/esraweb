import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-headerlink',
  templateUrl: './headerlink.component.html',
  styleUrls: ['./headerlink.component.css']
})
export class HeaderlinkComponent implements OnInit {
  x: any;
  constructor(public router: Router) { }

  ngOnInit(): void {
    this.onHome();
    // this.router.navigate(['home/dashboard']);
    // const home = document.querySelector('.home-link');
    // home.classList.add('active-link');
  }

  public myFunction() {
    this.x = document.getElementById('myTopnav');
    if (this.x.className === 'topnav') {
      this.x.className += ' responsive';
    } else {
      this.x.className = 'topnav';
    }
  }
  public onHome() {
    this.router.navigate(['home/dashboard']);

    const home = document.querySelector('.home-link');
    const about = document.querySelector('.about-link');
    const download = document.querySelector('.download-link');
    const contact = document.querySelector('.contact-link');
    const signup = document.querySelector('.signup-link');
    const login = document.querySelector('.login-link');

    home.classList.add('active-link');
    about.classList.remove('active-link');
    download.classList.remove('active-link');
    contact.classList.remove('active-link');
    signup.classList.remove('active-link');
    login.classList.remove('active-link');

    this.x = document.getElementById('myTopnav');
    if (this.x.className === 'topnav') {
      this.x.className += ' responsive';
    } else {
      this.x.className = 'topnav';
    }
  }

  public onAbout() {
    this.router.navigate(['home/homepage']);

    const home = document.querySelector('.home-link');
    const about = document.querySelector('.about-link');
    const download = document.querySelector('.download-link');
    const contact = document.querySelector('.contact-link');
    const signup = document.querySelector('.signup-link');
    const login = document.querySelector('.login-link');

    home.classList.remove('active-link');
    about.classList.add('active-link');
    download.classList.remove('active-link');
    contact.classList.remove('active-link');
    signup.classList.remove('active-link');
    login.classList.remove('active-link');

    this.x = document.getElementById('myTopnav');
    if (this.x.className === 'topnav') {
      this.x.className += ' responsive';
    } else {
      this.x.className = 'topnav';
    }
  }

  public onDownload() {
    this.router.navigate(['home/homepage']);

    const home = document.querySelector('.home-link');
    const about = document.querySelector('.about-link');
    const download = document.querySelector('.download-link');
    const contact = document.querySelector('.contact-link');
    const signup = document.querySelector('.signup-link');
    const login = document.querySelector('.login-link');

    home.classList.remove('active-link');
    about.classList.remove('active-link');
    download.classList.add('active-link');
    contact.classList.remove('active-link');
    signup.classList.remove('active-link');
    login.classList.remove('active-link');

    this.x = document.getElementById('myTopnav');
    if (this.x.className === 'topnav') {
      this.x.className += ' responsive';
    } else {
      this.x.className = 'topnav';
    }
  }

  public onContact() {
    this.router.navigate(['home/homepage']);

    const home = document.querySelector('.home-link');
    const about = document.querySelector('.about-link');
    const download = document.querySelector('.download-link');
    const contact = document.querySelector('.contact-link');
    const signup = document.querySelector('.signup-link');
    const login = document.querySelector('.login-link');

    home.classList.remove('active-link');
    about.classList.remove('active-link');
    download.classList.remove('active-link');
    contact.classList.add('active-link');
    signup.classList.remove('active-link');
    login.classList.remove('active-link');

    this.x = document.getElementById('myTopnav');
    if (this.x.className === 'topnav') {
      this.x.className += ' responsive';
    } else {
      this.x.className = 'topnav';
    }
  }

  public onSignup() {
    this.router.navigate(['home/signup']);

    const home = document.querySelector('.home-link');
    const about = document.querySelector('.about-link');
    const download = document.querySelector('.download-link');
    const contact = document.querySelector('.contact-link');
    const signup = document.querySelector('.signup-link');
    const login = document.querySelector('.login-link');

    home.classList.remove('active-link');
    about.classList.remove('active-link');
    download.classList.remove('active-link');
    contact.classList.remove('active-link');
    signup.classList.add('active-link');
    login.classList.remove('active-link');

    this.x = document.getElementById('myTopnav');
    if (this.x.className === 'topnav') {
      this.x.className += ' responsive';
    } else {
      this.x.className = 'topnav';
    }
  }

  public onLogin() {
    this.router.navigate(['home/login']);

    const home = document.querySelector('.home-link');
    const about = document.querySelector('.about-link');
    const download = document.querySelector('.download-link');
    const contact = document.querySelector('.contact-link');
    const signup = document.querySelector('.signup-link');
    const login = document.querySelector('.login-link');

    home.classList.remove('active-link');
    about.classList.remove('active-link');
    download.classList.remove('active-link');
    contact.classList.remove('active-link');
    signup.classList.remove('active-link');
    login.classList.add('active-link');

    this.x = document.getElementById('myTopnav');
    if (this.x.className === 'topnav') {
      this.x.className += ' responsive';
    } else {
      this.x.className = 'topnav';
    }
  }
}
