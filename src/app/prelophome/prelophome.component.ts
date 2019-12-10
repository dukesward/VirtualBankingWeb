import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-prelophome',
  templateUrl: './prelophome.component.html',
  styleUrls: ['./prelophome.component.scss']
})
export class PrelophomeComponent implements OnInit {

  constructor(
    private router: Router,
    private http: HttpClient) { }

  offerDetail: any

  ngOnInit() {
    this.http.get("https://ac001157-930f-4da7-bae7-6c3472cf08a7.mock.pstmn.io/customer/offer")
      .subscribe(res => {
        this.offerDetail = res;
        console.log(this.offerDetail);
      })
  }

  getThisLoan() {
    this.router.navigateByUrl('/prelophome/prelopinput');
  }

}
