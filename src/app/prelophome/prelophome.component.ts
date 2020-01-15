import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { HttpClient } from "@angular/common/http";

declare var globalOfferDetail;

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
    this.http.get("http://13.125.249.61:8885/prelop/getOfferDetails?offerId=ABC")
      .subscribe(res => {
        this.offerDetail = res;
        globalOfferDetail = res;
        console.log(this.offerDetail);
      })
  }

  getThisLoan() {
    this.router.navigate(['/prelophome/prelopinput'], { skipLocationChange: true });
  }

}
