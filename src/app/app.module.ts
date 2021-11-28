import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { MyserviceService } from './myservice.service';


// HttpClient module for RESTful API
import { HttpClientModule } from '@angular/common/http';

// Routing module for router service
import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';
import { DetailsComponent } from './details/details.component';
import { ListComponent } from './list/list.component';
import { HeaderComponent } from './header/header.component';
import { TrailerComponent } from './trailer/trailer.component';

import { DateFormat } from './shared/custom.pipe';
import { FilterPipe } from './shared/filter.pipe';

import {
  MatInputModule,
  MatCardModule,
  MatGridListModule,
  MatChipsModule,
  MatDialogModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatFormFieldModule
} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RentComponent } from './rent/rent.component';
import {MatSelectModule} from '@angular/material/select';
import { RentedmoviesComponent } from './rentedmovies/rentedmovies.component';

@NgModule({
  declarations: [
    AppComponent,
    DetailsComponent,
    ListComponent,
    HeaderComponent,
    DateFormat,
    FilterPipe,
    TrailerComponent,
    LoginComponent,
    RentComponent,
    RentedmoviesComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatGridListModule,
    MatProgressSpinnerModule,
    MatChipsModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    MatSelectModule,
    ReactiveFormsModule
  ],
  providers: [MyserviceService],
  entryComponents: [
    TrailerComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
