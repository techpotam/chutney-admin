import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopPackagesComponent } from './top-packages.component';

describe('TopPackagesComponent', () => {
  let component: TopPackagesComponent;
  let fixture: ComponentFixture<TopPackagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopPackagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopPackagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
