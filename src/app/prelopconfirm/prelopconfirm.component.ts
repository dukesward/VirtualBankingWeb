import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prelopconfirm',
  templateUrl: './prelopconfirm.component.html',
  styleUrls: ['./prelopconfirm.component.scss']
})
export class PrelopconfirmComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  complete() {
    this.router.navigateByUrl('/prelophome/prelopsuccess');
  }

}
