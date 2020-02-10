import { Component, OnInit } from '@angular/core';
import { NgwWowService } from 'ngx-wow';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  constructor(private wowService: NgwWowService) { }

  ngOnInit() {
    this.wowService.init();
  }

}
