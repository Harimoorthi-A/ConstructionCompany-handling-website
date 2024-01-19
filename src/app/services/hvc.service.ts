import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HvcService {

  BASE_URL = "http://localhost:3000"
  constructor(private http: HttpClient) { }

  // get allprojects api
  getAllProjects() {
    return this.http.get(`${this.BASE_URL}/projects/all`)
  }

  // login
  loginApi() {
    return this.http.get(`${this.BASE_URL}/admin/details`)
  }

  // add a post
  addApi(bodyData: any) {
    return this.http.post(`${this.BASE_URL}/dashboard/add-project`, bodyData)
  }

  // add a notification
  addCareerApi(bodyData: any) {
    return this.http.post(`${this.BASE_URL}/dashboard/add-careers`, bodyData)
  }

  // get allprojects api
  getAllCareers() {
    return this.http.get(`${this.BASE_URL}/career/all`)
  }

  // add a enq
  addEnqApi(bodyData: any) {
    return this.http.post(`${this.BASE_URL}/enquiry`, bodyData)
  }

  // get allprojects api
  getAllEnquiries() {
    return this.http.get(`${this.BASE_URL}/dashboard/enquiries`)
  }

  //delete
  deletePost(_id: any) {
    return this.http.delete(`${this.BASE_URL}/careers/${_id}`)
  }

  //delete project
  deleteProject(_id: any) {
    return this.http.delete(`${this.BASE_URL}/dashboard-projects/${_id}`)
  }

  // get selected project
  getSelectedProject(_id: any) {
    return this.http.get(`${this.BASE_URL}/edit-project/${_id}`)
  }

  // update project
  updateProject(_id: any, bodyData:any) {
    console.log(bodyData);
    return this.http.post(`${this.BASE_URL}/edit-project/${_id}`,bodyData)
  }

    //delete enq
    deleteEnq(_id: any) {
      return this.http.delete(`${this.BASE_URL}/enquiries/${_id}`)
    }
  

}
