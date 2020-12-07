import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ControlContainer } from '@angular/forms';
import { FormControl, FormGroupDirective, NgForm } from '@angular/forms';

import * as _ from 'lodash';
// import * as moment from 'moment';
@Component({
  selector: 'app-saveprofile',
  templateUrl: './saveprofile.component.html',
  styleUrls: ['./saveprofile.component.css']
})
export class SaveprofileComponent implements OnInit {
  VID: any;
  tableData: any;
  name: any;
  Oldpass: any;
  password: any;
  UserID: any;
  newImg: any;
  data1: any;
  baseimage: any;
  imageError: string;
  isImageSaved: boolean;
  cardImageBase64: string;
  hide = true;
  form: FormGroup = new FormGroup({});
  constructor(private route: ActivatedRoute, public router: Router, private http: HttpClient,private fb: FormBuilder) { 
    this.form = fb.group({
      name: ['', Validators.required],
      Oldpass: ['', Validators.required],
      password: ['', [Validators.required, Validators.maxLength(8)]],
    });
  }

  ngOnInit(): void {
    this.UserID = localStorage.getItem('usersid');
    this.VID = this.route.snapshot.params.vendorID;
    console.log(this.VID);

    this.http.get<any>('https://a1xlltmdgi.execute-api.ap-southeast-2.amazonaws.com/dev/vendors?VendorID=' + this.VID).subscribe(data => {
      console.log(data);
      this.tableData = data.Vendors;
      console.log(this.tableData);
      this.form.controls.name.setValue(this.tableData.Name);
    })
  }

  public putdata() {
    const body = {
      Name: this.name,
      OldPassword: this.Oldpass,
      Password: this.password,
      ProfilePic: this.baseimage
    };
    this.http.put<any>('https://a1xlltmdgi.execute-api.ap-southeast-2.amazonaws.com/dev/adminusers/' + this.UserID, body).subscribe((data => {
      console.log(data);
      if (data.Status === 1) {
        this.router.navigate(['home/details']);
      }
      else{
        alert(data.Message);
      }
      // else {
      //   document.getElementById("msg").innerText = "Incorrect old Password";
      // }
    }), (error) => {
      console.log(error);
    });
  }
  // public putprofile() {
  //   const body = {
  //     ProfilePic: this.baseimage
  //   };
  //     this.http.put<any>('https://a1xlltmdgi.execute-api.ap-southeast-2.amazonaws.com/dev/adminusers/' + this.UserID, body).subscribe((data => {
  //       console.log(data);
  //       if (data.Status === 1) {

  //         this.router.navigate(['home/details']);

  //       }
  //     }), (error) => {
  //       console.log(error);
  //     });

  // }
  get f() {
    return this.form.controls;
  }
  fileChangeEvent(fileInput: any) {
    this.imageError = null;
    if (fileInput.target.files && fileInput.target.files[0]) {
      // Size Filter Bytes
      const max_size = 20971520;
      const allowed_types = ['image/png', 'image/jpeg'];
      const max_height = 15200;
      const max_width = 25600;

      if (fileInput.target.files[0].size > max_size) {
        this.imageError =
          'Maximum size allowed is ' + max_size / 1000 + 'Mb';

        return false;
      }

      if (!_.includes(allowed_types, fileInput.target.files[0].type)) {
        this.imageError = 'Only Images are allowed ( JPG | PNG )';
        return false;
      }
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const image = new Image();
        image.src = e.target.result;
        image.onload = rs => {
          const img_height = rs.currentTarget['height'];
          const img_width = rs.currentTarget['width'];

          console.log(img_height, img_width);


          if (img_height > max_height && img_width > max_width) {
            this.imageError =
              'Maximum dimentions allowed ' +
              max_height +
              '*' +
              max_width +
              'px';
            return false;
          } else {
            const imgBase64Path = e.target.result;
            this.cardImageBase64 = imgBase64Path;
            this.data1 = this.cardImageBase64.replace(/^data:image\/\w+;base64,/, "");
            this.baseimage = this.data1
            this.isImageSaved = true;
            // this.previewImagePath = imgBase64Path;
          }
        };
      };

      reader.readAsDataURL(fileInput.target.files[0]);
    }
  }

  // removeImage() {
  //     this.cardImageBase64 = null;
  //     this.isImageSaved = false;
  // }
}
