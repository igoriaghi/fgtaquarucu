import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MessageService, PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit{

  constructor(
    private messageService: MessageService,
    private primengConfig: PrimeNGConfig
  ) {
    
  }
  ngOnInit(): void {
    this.primengConfig.ripple = true;    
  }



}