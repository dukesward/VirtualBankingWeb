import { Component, OnInit } from '@angular/core';

declare var globalOfferDetail;

@Component({
  selector: 'app-prelopsuccess',
  templateUrl: './prelopsuccess.component.html',
  styleUrls: ['./prelopsuccess.component.scss']
})
export class PrelopsuccessComponent implements OnInit {

  constructor() { }

  offerDetail: any

  ngOnInit() {
    this.offerDetail = globalOfferDetail;
  }

}
