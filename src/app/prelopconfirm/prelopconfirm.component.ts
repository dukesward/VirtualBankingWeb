import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare var globalOfferDetail;

@Component({
  selector: 'app-prelopconfirm',
  templateUrl: './prelopconfirm.component.html',
  styleUrls: ['./prelopconfirm.component.scss']
})
export class PrelopconfirmComponent implements OnInit {

  constructor(private router: Router) { }

  offerDetail: any

  ngOnInit() {
    this.offerDetail = globalOfferDetail;
  }

  complete() {
    this.router.navigate(['/prelophome/prelopsuccess'], { skipLocationChange: true });
  }

}
