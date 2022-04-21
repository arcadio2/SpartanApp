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
import {TableModule} from 'primeng/table';
import {PaginatorModule} from 'primeng/paginator';
import {MultiSelectModule} from 'primeng/multiselect';
import {AvatarModule} from 'primeng/avatar';
import {FileUploadModule} from 'primeng/fileupload';
import {MegaMenuModule} from 'primeng/megamenu';
import {InputSwitchModule} from 'primeng/inputswitch';
import {FieldsetModule} from 'primeng/fieldset';
import {DividerModule} from 'primeng/divider';
import { ChipModule } from 'primeng/chip';
import {ImageModule} from 'primeng/image';
import {TabViewModule} from 'primeng/tabview';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
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
    TableModule,
    PaginatorModule,
    InputNumberModule,
    SelectButtonModule,
    MultiSelectModule,
    AvatarModule,
    DividerModule,
    FileUploadModule,
    MegaMenuModule,
    ImageModule,
    FieldsetModule,
    ChipModule,
    InputSwitchModule,
    TabViewModule,
    MessageModule,
    MessageModule
    /*FieldsetModule,
    MenubarModule,
    ToolbarModule ,
    TableModule */
  ]
})
export class PrimengModule { }
