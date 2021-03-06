import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { baseenvironment } from "../../app/config";
@Component({
  selector: 'app-editsalon',
  templateUrl: './editsalon.component.html',
  styleUrls: ['./editsalon.component.css']
})
export class EditsalonComponent implements OnInit {
VID:any;
tableData:any;
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

}
