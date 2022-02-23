import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ToastModule} from 'primeng/toast';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {PanelModule} from 'primeng/panel';
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';


@NgModule({
  declarations: [
    
  ],
  exports:[
    ToastModule,
    ProgressSpinnerModule,
    PanelModule,
    ButtonModule,
    CardModule,
    /*FieldsetModule,
    MenubarModule,
    ToolbarModule ,
    TableModule */
  ]
})
export class PrimengModule { }
