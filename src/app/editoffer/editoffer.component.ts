import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators, ControlContainer } from '@angular/forms';
import { FormControl, FormGroupDirective, NgForm } from '@angular/forms';


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
      offper: ['', Validators.required],
      fromdate: ['', Validators.required],
      description: ['', Validators.required],
      frmtime: ['', Validators.required],
      totime: ['', Validators.required],

    });
  }

  ngOnInit(): void {
     this.offerid = this.route.snapshot.params.id;
     console.log( this.offerid);

     this.http.get<any>('https://a1xlltmdgi.execute-api.ap-southeast-2.amazonaws.com/dev/offers?OfferID=' + this.offerid ).subscribe(data => {
        console.log(data);
        this.tableData = data.Offers;
        console.log(this.tableData);
        this.form.controls.name.setValue(this.tableData.OfferTitle);
        this.form.controls.description.setValue(this.tableData.Description);
         this.form.controls.aprice.setValue(this.tableData.ActualPrice);
          this.form.controls.offerprice.setValue(this.tableData.OfferPrice);
         this.form.controls.offper.setValue(this.tableData.OfferPercentage);

          this.form.controls.serduration.setValue(this.tableData.ServiceDuration);
        this.form.controls.fromdate.setValue(this.tableData.FromDateTime);
         this.form.controls.todate.setValue(this.tableData.ToDateTime);
          this.form.controls.frmtime.setValue(this.tableData.FromTime);
         this.form.controls.totime.setValue(this.tableData.ToTime);
    })
     
  }
  get f() {
    return this.form.controls;
  }
public submit()
{
   
}
}
