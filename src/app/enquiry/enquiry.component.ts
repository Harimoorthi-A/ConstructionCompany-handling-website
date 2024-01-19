import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { HvcService } from '../services/hvc.service';

@Component({
  selector: 'app-enquiry',
  templateUrl: './enquiry.component.html',
  styleUrls: ['./enquiry.component.css']
})
export class EnquiryComponent implements OnInit {

  // modal of add form
  enqform = this.fb.group({
    name: [''],
    email: [''],
    phonenumber: [''],
    projectInterested: [''],
    comments: ['']
  })

  constructor(private fb: FormBuilder, private hs: HvcService, private rout: Router) { }

  ngOnInit(): void {
  }

  addEnquiry() {
    if (this.enqform.valid) {
      // var path = this.addform.value

      var reqBody = {
        name: this.enqform.value.name,
        email: this.enqform.value.email,
        phonenumber: this.enqform.value.phonenumber,
        projectInterested: this.enqform.value.projectInterested,
        comments: this.enqform.value.comments,
      }
      // console.log(reqBody);

      this.hs.addEnqApi(reqBody).subscribe({
        next: (result: any) => {
          this.rout.navigateByUrl('enquiry')
          this.enqform.reset();
          alert("Enquiry send successfully")
          // console.log(result);
        },
        error: (err: any) => {
          alert(err.error);
        }
      })

    }
    else {
      alert("please fill all datas")
    }

  }

}
