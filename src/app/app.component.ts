import { Component } from '@angular/core';
import { AppConfig } from './services/app.config.service';
import { AppController } from './services/app.controller.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private appConfig:AppConfig,
    private appController: AppController){
    
  }
  title = 'virtual-bank-web';

  
  

}
