import { Component, OnInit } from '@angular/core';
import { HvcService } from 'src/app/services/hvc.service';

@Component({
  selector: 'app-enq',
  templateUrl: './enq.component.html',
  styleUrls: ['./enq.component.css']
})
export class EnqComponent implements OnInit{

  constructor(private hs: HvcService) { }
  allenquiries: any = []

  ngOnInit(): void {
    this.hs.getAllEnquiries().subscribe({
      next: (enquiries: any) => {
        this.allenquiries = enquiries
        console.log(enquiries);
    
      },
      error: (err: any) => {
        console.log(err);
      }
    })
  }

  removeEnq(_id:any){
    console.log(_id);
    this.hs.deleteEnq(_id).subscribe({
      next: (result: any) => {
        console.log(result);
        // this.hs.getAllCareers()
        this.hs.getAllEnquiries()
        alert("enq deleted")
      },
      error: (err: any) => {
        console.log(err);
        
      }

    })
    
  }

}
