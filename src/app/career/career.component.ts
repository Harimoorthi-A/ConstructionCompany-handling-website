import { Component, OnInit } from '@angular/core';
import { HvcService } from '../services/hvc.service';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.css']
})
export class CareerComponent implements OnInit {

  constructor(private hs: HvcService) { }
  allcareers: any = []
  careerActive:any=""

  ngOnInit(): void {
    this.hs.getAllCareers().subscribe({
      next: (notification: any) => {
        this.allcareers = notification
        console.log(notification);
        localStorage.setItem("careerActive","1")
        if (localStorage.getItem("careerActive")) {
          this.careerActive = localStorage.getItem("careerActive")
        }
        else {
          this.careerActive = ""
        }
    
      },
      error: (err: any) => {
        console.log(err);
      }
    })

    
  }

}
