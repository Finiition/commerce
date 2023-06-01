import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon'; 
import { MatNativeDateModule} from '@angular/material/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RumeursComponent } from './rumeurs/rumeurs.component';
import { AccueilComponent } from './accueil/accueil.component';

import { NgxImageZoomModule } from 'ngx-image-zoom';
import { ZoneComponent } from './zone/zone.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RumeursComponent,
    AccueilComponent,
    ZoneComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    MatCardModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatNativeDateModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatGridListModule,    
    MatTabsModule,
    NgxImageZoomModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
