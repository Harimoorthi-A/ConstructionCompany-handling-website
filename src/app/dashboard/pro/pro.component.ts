import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HvcService } from 'src/app/services/hvc.service';

@Component({
  selector: 'app-pro',
  templateUrl: './pro.component.html',
  styleUrls: ['./pro.component.css']
})
export class ProComponent implements OnInit {

  constructor(private hs: HvcService, private rout: Router) { }
  allprojects: any = []

  ngOnInit(): void {
    this.hs.getAllProjects().subscribe({
      next: (result: any) => {
        this.allprojects = result
        // console.log(this.allprojects);
      },
      error: (err: any) => {
        console.log(err);
      }
    })
  }

  removeProject(_id: any) {
    console.log(_id);
    this.hs.deleteProject(_id).subscribe({
      next: (result: any) => {
        // console.log(result);
        // this.hs.getAllCareers()
        this.rout.navigateByUrl('/dashboard')
        this.hs.getAllProjects()
        alert("Project deleted")
      },
      error: (err: any) => {
        console.log(err);
      }
    })
  }

}
