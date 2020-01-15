import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare var globalOfferDetail;

@Component({
  selector: 'app-prelopinput',
  templateUrl: './prelopinput.component.html',
  styleUrls: ['./prelopinput.component.scss']
})
export class PrelopinputComponent implements OnInit {

  constructor(private router: Router) { }

  offerDetail: any

  ngOnInit() {
    this.offerDetail = globalOfferDetail;
  }

  submit() {
    this.router.navigate(['/prelophome/prelopconfirm'], { skipLocationChange: true });
  }

}
