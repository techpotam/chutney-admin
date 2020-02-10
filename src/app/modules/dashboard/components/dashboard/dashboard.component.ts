import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgwWowService } from 'ngx-wow';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  cards =[
    {
      heading: 'Total Packages',
      count: '230',
      classicon: 'fa fa-product-hunt'
    },
    {
      heading: 'Total Hotels',
      count: '243',
      classicon: 'fa fa-hotel'
    },
    {
      heading: 'Total Queries',
      count: '567',
      classicon: 'fa fa-question-circle'
    },
    {
      heading: 'Unanswered queries',
      count: '567',
      classicon: 'fa fa-question-circle-o'
    },
    
  ]
  
  constructor( private router:Router,private wowService: NgwWowService) {
    // if(sessionStorage.getItem('accessToken')===null||undefined){
    //   this.router.navigate(['/auth']);
    // }
   }

  ngOnInit() {
    this.wowService.init();
  }

}
