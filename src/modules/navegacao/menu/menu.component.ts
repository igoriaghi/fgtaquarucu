import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MenuItem} from 'primeng/api';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  items: MenuItem[];

  constructor(
    private router: Router,

  ) {

   }

  ngOnInit() {
      this.items = [
          {
            label:'Home',
            icon:'pi pi-fw pi-home',
            command: () => { this.router.navigateByUrl('/admin/dashboard') }
          },
          {
              label:'Cadastro',
              icon:'pi pi-fw pi-file',
              items:[
                  {
                      label:'Usuários',
                      command: () => { this.router.navigateByUrl('/admin/usuario') }
                  },
                  {
                      label:'Tecnicos'
                  },
                  {
                      label:'Categorias',
                      // url: '/admin/categoria',     
                      command: () => { this.router.navigateByUrl('/admin/categoria') }
                  },
                  {
                      label:'Participantes',
                      command: () => { this.router.navigate([`/participante/registro`]); }
                  },
                  {
                      label:'Dia do Evento'
                  },
              ]
          },          
          {
              label:'Eventos',
              icon:'pi pi-fw pi-calendar',
              items:[
                  {
                      label:'Potuação',
                      icon:'pi pi-fw pi-pencil',
                      items:[
                        {
                            label:'Técnico',
                            icon:'pi pi-fw pi-calendar-plus'
                        },
                        {
                            label:'Convidado',
                            icon:'pi pi-fw pi-calendar-minus'
                        }
                      ],
                      
                  },
                  {
                    label:'Notícia',
                    icon:'pi pi-fw pi-pencil',
                  },
                  {
                    label:'Notificação',
                    icon:'pi pi-fw pi-pencil',
                  },
                  {
                    label:'Penalidades',
                    icon:'pi pi-fw pi-pencil',
                  }
              ]
          }
      ];
  } 

  logout() {
    this.router.navigateByUrl('/login');
  }
}
