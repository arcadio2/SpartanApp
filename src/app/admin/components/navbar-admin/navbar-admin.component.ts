import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../../models/user.model';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar-admin',
  templateUrl: './navbar-admin.component.html',
  styleUrls: ['./navbar-admin.component.css']
})
export class NavbarAdminComponent implements OnInit {

    @Input() user!:User;
    items!: MenuItem[];
    constructor() { }

    ngOnInit(): void {

    this.items = [
        {
        label:'File',
        icon:'pi pi-fw pi-file',
        items:[
            {
                label:'New',
                icon:'pi pi-fw pi-plus',
                items:[
                {
                    label:'Bookmark',
                    icon:'pi pi-fw pi-bookmark'
                },
                {
                    label:'Video',
                    icon:'pi pi-fw pi-video'
                },

                ]
            },
            {
                label:'Delete',
                icon:'pi pi-fw pi-trash'
            },
            {
                separator:true
            },
            {
                label:'Export',
                icon:'pi pi-fw pi-external-link'
            }
        ]
    },
    {
        label:'Edit',
        icon:'pi pi-fw pi-pencil',
        items:[
            {
                label:'Left',
                icon:'pi pi-fw pi-align-left'
            },
            {
                label:'Right',
                icon:'pi pi-fw pi-align-right'
            },
            {
                label:'Center',
                icon:'pi pi-fw pi-align-center'
            },
            {
                label:'Justify',
                icon:'pi pi-fw pi-align-justify'
            },

        ]
      },
      {
          label:'Usuarios',
          icon:'pi pi-fw pi-user',
          items:[
              {
                  label:'Crear',
                  icon:'pi pi-fw pi-user-plus',
                  routerLink:'/admin/create'

              },
              {
                  label:'Delete',
                  icon:'pi pi-fw pi-user-minus',

              },
              {
                  label:'Usuarios',
                  icon:'pi pi-fw pi-users',
                  routerLink:'/admin/usuarios'
              }
          ]
      },
      {
          label:'Events',
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
      },
      {
          label:'Cerrar sesión',
          routerLink:'/admin/logout',
          icon:'pi pi-fw pi-power-off'
      }
  ];


  }

}
