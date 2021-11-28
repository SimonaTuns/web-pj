import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {FormControl, FormGroup} from '@angular/forms';
import {MyserviceService} from '../myservice.service';

@Component({
  selector: 'app-rent',
  templateUrl: './rent.component.html',
  styleUrls: ['./rent.component.sass']
})
export class RentComponent implements OnInit {
   todaydate;
   componentproperty;
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
   onClickSubmit(data) {this.emailid = data.emailid; }

}
