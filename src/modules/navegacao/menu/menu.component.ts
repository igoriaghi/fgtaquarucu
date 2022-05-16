import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  items: MenuItem[];

  constructor() {

   }

  ngOnInit() {
      this.items = [
          {
              label:'Cadastro',
              icon:'pi pi-fw pi-file',
              items:[
                  {
                      label:'Usuário'
                  },
                  {
                      label:'Participante'
                  }
              ]
          },
          
          {
              label:'Eventos',
              icon:'pi pi-fw pi-calendar',
              items:[
                  {
                      label:'Edit',
                      icon:'pi pi-fw pi-pencil',
                      items:[
                      {
                          label:'Save',
                          icon:'pi pi-fw pi-calendar-plus'
                      },
                      {
                          label:'Delete',
                          icon:'pi pi-fw pi-calendar-minus'
                      },

                      ]
                  },
                  {
                      label:'Archieve',
                      icon:'pi pi-fw pi-calendar-times',
                      items:[
                      {
                          label:'Remove',
                          icon:'pi pi-fw pi-calendar-minus'
                      }
                      ]
                  }
              ]
          }
      ];
  } 
}
