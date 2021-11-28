import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RentedmoviesComponent } from './rentedmovies.component';

describe('RentedmoviesComponent', () => {
  let component: RentedmoviesComponent;
  let fixture: ComponentFixture<RentedmoviesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentedmoviesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentedmoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
