import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
UserID:any;
VendorId:any;
tableData:any;
popup:any;
  constructor(public router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    this.UserID = localStorage.getItem('usersid');
    this.VendorId = localStorage.getItem('vendorid');
    console.log(this.UserID);

    this.http.get<any>('https://a1xlltmdgi.execute-api.ap-southeast-2.amazonaws.com/dev/vendors?VendorID=' + this.VendorId ).subscribe(data => {
        console.log(data);
        this.tableData = data.Vendors;
        console.log(this.tableData);
    })
  }
  public onHomepage()
  {
    this.router.navigate(['home/details']);
  }
  public myFunction() {
      // var popup = document.getElementById("myPopup");
      // popup.classList.toggle("show");
       this.popup = document.getElementById('myPopup');
    this.popup.classList.toggle("show");
  }
 public logout() {
    this.router.navigate(['/home']);
    // window.location.reload();
    localStorage.clear();
  }
  public profile()
  {
    this.router.navigate(['/home/userprofile/' + this.VendorId]);
  }
}
