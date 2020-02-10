import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, Validators ,AbstractControl,FormBuilder} from '@angular/forms';

import { NgwWowService } from 'ngx-wow';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
 
  constructor(private modalService: NgbModal,
    private wowService: NgwWowService) { 
    }
  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true });
  }

  ngOnInit() {
    this.wowService.init();
  
  }
// pasword match


 }




