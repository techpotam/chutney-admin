import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PackagesinCityComponent } from './packagesin-city.component';

describe('PackagesinCityComponent', () => {
  let component: PackagesinCityComponent;
  let fixture: ComponentFixture<PackagesinCityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PackagesinCityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PackagesinCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
