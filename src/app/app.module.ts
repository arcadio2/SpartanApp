import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { LandingComponent } from './shared/pages/landing/landing.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MessageService } from 'primeng/api';

import { PrimengModule } from './primeng/primeng.module';
import { ToastrModule } from 'ngx-toastr';
import { MenuLandingComponent } from './shared/components/menu-landing/menu-landing.component';
import { EjerciciosComponent } from './shared/components/ejercicios/ejercicios.component';
import { InterceptorService } from './confing/interceptor.service';
import { registerLocaleData } from '@angular/common';
import localeES from '@angular/common/locales/es';
import { environment } from '../environments/environment.prod';

registerLocaleData(localeES, 'es');

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    FooterComponent,
    MenuLandingComponent,
    EjerciciosComponent,
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
          maxOpened: 1,
          autoDismiss: true,
          enableHtml: true},
    ),
    HttpClientModule,
  ],
  providers: [MessageService,
    { provide: 'BASE_API_URL', useValue: environment.urlBase },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    },
    { provide: LOCALE_ID, useValue: 'es' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
