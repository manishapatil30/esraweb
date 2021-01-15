import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators, ControlContainer } from '@angular/forms';
import { FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { formatDate } from '@angular/common';
import { baseenvironment } from "../../app/config";


@Component({
  selector: 'app-editoffer',
  templateUrl: './editoffer.component.html',
  styleUrls: ['./editoffer.component.css']
})
export class EditofferComponent implements OnInit {
offerid:any;
tableData:any;

name: string;
  aprice: any;
  password: any;
  confirmpassword: any;
  todate:any;
  offerprice:any;
  offper:any;
  fromdate:any;
  myDatePicker:any;
  description:any;
 selectedStart:any;
  frmtime:any;
  totime:any;
  hide = true;
  serduration:any;
  category:any;
  text:any;
  time:any;
Discount:any;
form: FormGroup = new FormGroup({});
  constructor(private route: ActivatedRoute, public router: Router, private fb: FormBuilder, private http: HttpClient) { 

    this.form = fb.group({
      aprice: ['', Validators.required],
      name: ['', Validators.required],
      phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9 ]{10}$'), Validators.maxLength(10)]],
      todate: ['',Validators.required],
      // confirmpassword: ['', [Validators.required, Validators.maxLength(8)]],
      serduration: ['', Validators.required],
      // toppings: ['', Validators.required],
      offerprice: ['', Validators.required],
      fromdate: ['', Validators.required],
      description: ['', Validators.required],
      frmtime: ['', Validators.required],
      totime: ['', Validators.required],
      offper: ['', Validators.required],

    });
  }

  ngOnInit(): void {
     this.offerid = this.route.snapshot.params.id;
     console.log( this.offerid);

     this.http.get<any>(baseenvironment.baseURL + '/offers?OfferID=' + this.offerid ).subscribe(data => {
        console.log(data);
        this.tableData = data.Offers;
        console.log(this.tableData);
        this.form.controls.name.setValue(this.tableData.OfferTitle);
        this.form.controls.description.setValue(this.tableData.Description);
         this.form.controls.aprice.setValue(this.tableData.ActualPrice);
          this.form.controls.offerprice.setValue(this.tableData.OfferPrice);
        //  this.form.controls.offper.setValue(this.tableData.OfferPercentage);
        // this.form.controls.offper.setValue((100 - (this.offerprice / this.aprice) * 100).toFixed(2));

          this.form.controls.serduration.setValue(this.tableData.ServiceDuration);

        this.form.controls.fromdate.setValue(formatDate(this.tableData.FromDateTime,'yyyy-MM-dd','en'));
         this.form.controls.todate.setValue(formatDate(this.tableData.ToDateTime,'yyyy-MM-dd','en'));

          // this.form.controls.frmtime.setValue(this.tableData.FromTime);
          // this.form.controls.time.setValue('12:00');
          this.form.controls.frmtime.setValue(this.tableData.FromTime);
         this.form.controls.totime.setValue(this.tableData.ToTime);
    })
     
  }
  get f() {
    return this.form.controls;
  }
public submit()
{
  this.Discount = (100 - (this.offerprice / this.aprice) * 100).toFixed(2);
  const body = {
      OfferTitle: this.name,
      Description: this.description,
      ActualPrice: this.aprice,
      OfferPrice: this.offerprice,
      OfferPercentage: this.Discount,
      FromDateTime: this.fromdate,
      ServiceDuration: this.serduration,
      ToDateTime: this.todate,
      ToTime: this.totime,
      FromTime: this.frmtime
  };
  this.http.put<any>(baseenvironment.baseURL + '/offers/'+ this.offerid, body).subscribe((data => {
    console.log(data);
    if (data.Status === 1) {
      alert('record update Successfully.');
      this.router.navigate(['home/details']);
      // window.scrollTo(0, 0);
    }
    else {
      alert('Error!please try again');
    }
  }), (error) => {
    console.log(error);
  });
}
public dis() {
  this.Discount = (100 - (this.offerprice / this.aprice) * 100).toFixed(2);
}
}
