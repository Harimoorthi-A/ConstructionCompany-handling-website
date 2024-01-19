import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { HvcService } from 'src/app/services/hvc.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  // modal of add form
  addform = this.fb.group({
    projectName: [''],
    location: [''],
    style: [''],
    status: [''],
    projectImage:['']
  })

  constructor(private fb: FormBuilder, private hs: HvcService, private rout: Router) { }

  ngOnInit(): void {
  }

  add() {
    if (this.addform.valid) {
      // var path = this.addform.value

      var reqBody = {
        projectName: this.addform.value.projectName,
        location: this.addform.value.location,
        style: this.addform.value.style,
        status: this.addform.value.status,
        projectImage:this.addform.value.projectImage
      }
      // console.log(reqBody);
      
      this.hs.addApi(reqBody).subscribe({
        next: (result: any) => {
          this.rout.navigateByUrl('/dashboard')
          alert("Project added successfully")
          console.log(result);
        },
        error: (err: any) => {
          alert("Please fill all datas");
        }
      })
      
    }
    else {
      alert("please fill all datas")
    }

  }

}
