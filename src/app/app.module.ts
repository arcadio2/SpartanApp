import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { LandingComponent } from './shared/pages/landing/landing.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MessageService } from 'primeng/api';

import { PrimengModule } from './primeng/primeng.module';
import { ToastrModule } from 'ngx-toastr';
import { MenuLandingComponent } from './shared/components/menu-landing/menu-landing.component';



@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    FooterComponent,
    MenuLandingComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    PrimengModule,
    ToastrModule.forRoot(
      {positionClass: 'toast-bottom-center', timeOut: 5000,
          preventDuplicates: true,
          closeButton: true,
          progressBar: true,
          maxOpened: 1,
          autoDismiss: true,
          enableHtml: true},
    ),
    HttpClientModule,
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
