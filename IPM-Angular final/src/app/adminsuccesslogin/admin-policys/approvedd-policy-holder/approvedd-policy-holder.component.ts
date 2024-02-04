import { Component, OnInit } from '@angular/core';
import { ApplyPolicie } from '../../../classfile/ApplyPolicies/apply-policie';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ApplyPoliciesServiceService } from '../../../services/ApplyPolicies/apply-policies-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-approvedd-policy-holder',
  templateUrl: './approvedd-policy-holder.component.html',
  styleUrls: ['./approvedd-policy-holder.component.css']
})
export class ApproveddPolicyHolderComponent implements OnInit {

  public allApprovedData!: ApplyPolicie[]
  constructor(
    private httpClient: HttpClient,
    public router: Router,
    private service: ApplyPoliciesServiceService
  ) { }

  ngOnInit(): void {

    if (localStorage.getItem('adminemail') === undefined || localStorage.getItem('adminemail') === null) {




      this.router.navigate(['alog']).then(() => {

        window.location.reload();
      })
    }


    this.httpClient.get<any>('http://localhost:8085/getcustomersByApproved').subscribe(
      response => {
        this.allApprovedData = response;
        console.log(this.allApprovedData);

      })
  }

  deleteRejected(appid: number) {

    this.service.deleteApplictionByID(appid).subscribe(() => {

      Swal.fire({
        position: 'top',
        icon: 'success',
        title: appid + " id's Application Deleted!!",
        showConfirmButton: false,
        timer: 2500
      })

      setTimeout(() => {
        this.getData();
      }, 3000)


    }, error => {
      Swal.fire({
        icon: error,
        title: 'Sorry! Not fount this Id ' + appid,
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      })
    })
  }

  getData() {
    this.httpClient.get<any>('http://localhost:8085/getcustomersByApproved').subscribe(
      response => {
        this.allApprovedData = response;
        console.log(this.allApprovedData);

      })
  }


}
