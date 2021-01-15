import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { baseenvironment } from "../../app/config";
@Component({
  selector: 'app-savesalon',
  templateUrl: './savesalon.component.html',
  styleUrls: ['./savesalon.component.css']
})
export class SavesalonComponent implements OnInit {
VID:any;
tableData:any;
Des:any;
Address:any;
Web:any;
Mail:any;
Password:any;
Name:any;
  constructor(private route: ActivatedRoute, public router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    this.VID = this.route.snapshot.params.vendorID;
     console.log( this.VID);

      this.http.get<any>(baseenvironment.baseURL + '/vendors?VendorID=' + this.VID ).subscribe(data => {
        console.log(data);
        this.tableData = data.Vendors;
        console.log(this.tableData);
    })
  }
public putdata()
{
  this.Name=(<HTMLInputElement>document.getElementById('name')).value;
  this.Des=(<HTMLInputElement>document.getElementById('des')).value;
  this.Address=(<HTMLInputElement>document.getElementById('address')).value;
  this.Mail=(<HTMLInputElement>document.getElementById('mail')).value;
   this.Web=(<HTMLInputElement>document.getElementById('web')).value;
  const body = {
      VendorName:this.Name,
      VendorDescription: this.Des,
      Address: this.Address,
      EmailID: this.Mail,
      Website: this.Web,
    };
    this.http.put<any>(baseenvironment.baseURL + '/vendors/' + this.VID, body).subscribe((data => {
      console.log(data);
      if (data.Status === 1) {
        
        this.router.navigate(['home/details']);
        
      }
      else {
        alert('Error!please try again');
      }
    }), (error) => {
      console.log(error);
    });
}
}
