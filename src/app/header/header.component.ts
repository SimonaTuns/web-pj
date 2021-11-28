import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {ActivatedRoute, Routes} from '@angular/router';
import {RestApiService} from '../shared/rest-api.service';
import {TrailerComponent} from '../trailer/trailer.component';
import {Inject} from '@angular/core';
import {LoginComponent} from '../login/login.component';
import {RentedmoviesComponent} from "../rentedmovies/rentedmovies.component";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})

export class HeaderComponent implements OnInit {
    constructor(
    public router: ActivatedRoute,
    public dialog: MatDialog
  ) {
  }
  ngOnInit() { }
    openDialog() {

        const dialogConfig = new MatDialogConfig();
        this.dialog.open(LoginComponent, dialogConfig);
    }
    openDialog2() {

        const dialogConfig = new MatDialogConfig();
        this.dialog.open(RentedmoviesComponent, dialogConfig);
    }
}


