import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MyserviceService} from "../myservice.service";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

   emailid;
   formdata;
    constructor(@Inject(MAT_DIALOG_DATA) public data: any, private myservice: MyserviceService) {

    }


   ngOnInit() {
      this.formdata = new FormGroup({
         emailid: new FormControl('angular@gmail.com'),
         passwd: new FormControl('abcd1234')
      });
   }
   onClickSubmit(data) {this.emailid = data.emailid;}

}
