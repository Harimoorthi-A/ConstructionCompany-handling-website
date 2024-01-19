import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { HvcService } from 'src/app/services/hvc.service';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {

  // modal of add form
  addform = this.fb.group({
    jobName: [''],
    qualification: [''],
    experience: [''],
    location: [''],
    salary: [''],
    status:['']
  })

  constructor(private fb: FormBuilder, private hs: HvcService, private rout: Router) { }

  ngOnInit(): void {
  }

  addCar() {
    if (this.addform.valid) {
      // var path = this.addform.value

      var reqBody = {
        jobName: this.addform.value.jobName,
        qualification: this.addform.value.qualification,
        experience: this.addform.value.experience,
        location: this.addform.value.location,
        salary: this.addform.value.salary,
        status: this.addform.value.status
      }
      // console.log(reqBody);

      this.hs.addCareerApi(reqBody).subscribe({
        next: (result: any) => {
          this.rout.navigateByUrl('/add-careers')
          this.addform.reset();
          alert("Project added successfully")
          // console.log(result);
        },
        error: (err: any) => {
          alert("please fill all datas");
        }
      })

    }
    else {
      alert("please fill all datas")
    }

  }

}
