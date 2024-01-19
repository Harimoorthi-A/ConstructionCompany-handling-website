import { Component, OnInit } from '@angular/core';
import { HvcService } from '../services/hvc.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor(private hs: HvcService) { }
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
}
