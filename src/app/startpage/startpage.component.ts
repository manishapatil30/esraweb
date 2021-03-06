import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-startpage',
  templateUrl: './startpage.component.html',
  styleUrls: ['./startpage.component.css']
})
export class StartpageComponent implements OnInit {

  constructor(private router: Router) { }
  ngOnInit(): void {
  }
  public onStarted() {
    this.router.navigate(['home/signup']);
    window.scrollTo(0, 0);
  }
  
}
