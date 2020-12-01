import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-detailsscreen',
  templateUrl: './detailsscreen.component.html',
  styleUrls: ['./detailsscreen.component.css']
})
export class DetailsscreenComponent implements OnInit {
  tableData:any;
  UserID:any;
  VendorId:any;
  offerData:any;
  constructor(public router: Router, private http: HttpClient) {

    this.UserID = localStorage.getItem('usersid');
    this.VendorId = localStorage.getItem('vendorid');
    console.log(this.UserID);
    console.log(this.VendorId);

   }

  ngOnInit(): void {
    

    this.http.get<any>('https://a1xlltmdgi.execute-api.ap-southeast-2.amazonaws.com/dev/vendors?VendorID=' + this.VendorId ).subscribe(data => {
        console.log(data);
        this.tableData = data.Vendors;
        console.log(this.tableData);
    })

    this.http.get<any>('https://a1xlltmdgi.execute-api.ap-southeast-2.amazonaws.com/dev/offers?VendorID=' + this.VendorId ).subscribe(data => {
      console.log(data);
      this.offerData = data.Offers;
      console.log(this.offerData);
    })
  }
  public formatDate(date) {
     return new Date(date)
  }

  public postdata(OfferID) {
      if (confirm("Do you want to Delete This Offer?")) {

        this.http.delete<any>('https://a1xlltmdgi.execute-api.ap-southeast-2.amazonaws.com/dev/offers/' + OfferID ).subscribe(data => {
          console.log(data);
          if(data.Status===1)
          {
            location.reload();
          }
        })
      }
  }

  public edituser()
  {
    this.router.navigate(['home/edituser']);
  }
  public Calendar()
  {
    this.router.navigate(['home/calendar']);
  }
}
