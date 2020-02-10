import { Component, OnInit } from '@angular/core';
import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [NgbDropdownConfig],
  


})
export class HeaderComponent implements OnInit {

  constructor(private router: Router,
    private route: ActivatedRoute,) { }

  ngOnInit() {
  }

  Logout() {
    var token = localStorage.getItem('Admin_Token');
    if (token) {
      localStorage.removeItem('Admin_Token');
      localStorage.removeItem('Admin_Obj');
      localStorage.removeItem('Admin_Pic');
      localStorage.removeItem('Admin_Name');
      this.router.navigate(['/login'], { relativeTo: this.route });
    } else {
      this.router.navigate(['/login'], { relativeTo: this.route });
    }
  }

}
