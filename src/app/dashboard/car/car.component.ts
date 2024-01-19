import { Component, OnInit } from '@angular/core';
import { HvcService } from 'src/app/services/hvc.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit{

  constructor(private hs: HvcService) { }
  allcareers: any = []

  ngOnInit(): void {
    this.getAllCareers()
  }

  getAllCareers(){
    this.hs.getAllCareers().subscribe({
      next: (notification: any) => {
        this.allcareers = notification
        // console.log(notification);
  
      },
      error: (err: any) => {
        console.log(err);
      }
    })

  }
  removePost(_id:any){
    console.log(_id);
    this.hs.deletePost(_id).subscribe({
      next: (result: any) => {
        console.log(result);
        // this.hs.getAllCareers()
        this.getAllCareers()
        alert("Post deleted")
      },
      error: (err: any) => {
        console.log(err);
        
      }

    })
  }
}
