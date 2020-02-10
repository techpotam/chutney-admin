import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-packagesin-city',
  templateUrl: './packagesin-city.component.html',
  styleUrls: ['./packagesin-city.component.scss']
})
export class PackagesinCityComponent implements OnInit {
  packages = [
  {
    name: 'Vikram Vintage Package',
    location: 'Nanital',
    description: '(3 nights), (3 Breakfast),(3 Dinners)',
    transpotation: 'Included',
    address:  'Solang Valley Kullu & Manikaran'
  },
  {
    name: 'Vikram Vintage Package',
    location: 'Nanital',
    description: '(3 nights), (3 Breakfast),(3 Dinners)',
    transpotation: 'Included',
    address:  'Solang Valley Kullu & Manikaran'
  },
  {
    name: 'Vikram Vintage Package',
    location: 'Nanital',
    description: '(3 nights), (3 Breakfast),(3 Dinners)',
    transpotation: 'Included',
    address:  'Solang Valley Kullu & Manikaran'
  },
  {
    name: 'Vikram Vintage Package',
    location: 'Nanital',
    description: '(3 nights), (3 Breakfast),(3 Dinners)',
    transpotation: 'Included',
    address:  'Solang Valley Kullu & Manikaran'
  },
  {
    name: 'Vikram Vintage Package',
    location: 'Nanital',
    description: '(3 nights), (3 Breakfast),(3 Dinners)',
    transpotation: 'Included',
    address:  'Solang Valley Kullu & Manikaran'
  },
]

  constructor() { }

  ngOnInit() {
  }

}
