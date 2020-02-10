import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, Validators ,AbstractControl} from '@angular/forms';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {

  
  constructor(private modalService: NgbModal) {}
    openVerticallyCentered(content) {
      this.modalService.open(content, { centered: true });
   }

  ngOnInit() {
  }

}
