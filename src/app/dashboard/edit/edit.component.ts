import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HvcService } from 'src/app/services/hvc.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id: any = ""
  projectdata:any = {}

  constructor(private hs: HvcService, private ar: ActivatedRoute, private route:Router) { }

  ngOnInit(): void {
    this.ar.params.subscribe((data: any) => {
      // console.log(data)
      this.id = data.id
      // console.log(this.id);

      this.hs.getSelectedProject(this.id).subscribe({
        next: (result: any) => {
          this.projectdata = result
          // console.log(this.projectdata);
        }
      })

    })

  }

  edit(){
    this.hs.updateProject(this.id,this.projectdata).subscribe({
      next:(result: any)=>{
        alert("Project Updated")
        this.route.navigateByUrl('dashboard-projects')
      },
      error:(result:any)=>{
        alert("update failed")
      }
    })
  }
}
