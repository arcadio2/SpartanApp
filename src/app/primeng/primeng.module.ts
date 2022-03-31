import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ToastModule} from 'primeng/toast';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {PanelModule} from 'primeng/panel';
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {RippleModule} from 'primeng/ripple';
import {MenubarModule} from 'primeng/menubar';
import {InputTextModule} from 'primeng/inputtext';
import {TabMenuModule} from 'primeng/tabmenu';
import {InputNumberModule} from 'primeng/inputnumber';
import {SelectButtonModule} from 'primeng/selectbutton';

@NgModule({
  declarations: [
    
  ],
  exports:[
    ToastModule,
    ProgressSpinnerModule,
    PanelModule,
    ButtonModule,
    InputTextModule,
    CardModule,
    MenubarModule,
    RippleModule,
    TabMenuModule,
    InputNumberModule,
    SelectButtonModule
    /*FieldsetModule,
    MenubarModule,
    ToolbarModule ,
    TableModule */
  ]
})
export class PrimengModule { }
