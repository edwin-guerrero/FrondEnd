import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { PersonajesComponent } from './Componentes/personajes/personajes.component';
import { PeliculasComponent } from './Componentes/peliculas/peliculas.component';
import { PlanetasComponent } from './Componentes/planetas/planetas.component';
import { NavesComponent } from './Componentes/naves/naves.component';
import { VehiculosComponent } from './Componentes/vehiculos/vehiculos.component';
import { EspeciesComponent } from './Componentes/especies/especies.component';
import { RoutingModule } from './routing/routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './Componentes/home/home.component';
import { LoginComponent } from './Componentes/login/login.component';

//modulos para inicio de session con google

import { SocialLoginModule, AuthServiceConfig } from "angularx-social-login";
import { GoogleLoginProvider, FacebookLoginProvider } from "angularx-social-login";

let config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider("561778628819-0cvjsc4lr13a9npp413d2736c7vb8srp.apps.googleusercontent.com")
  },

]);
 
export function provideConfig() {
  return config;
}



@NgModule({
  declarations: [
    AppComponent,
    PersonajesComponent,
    PeliculasComponent,
    PlanetasComponent,
    NavesComponent,
    VehiculosComponent,
    EspeciesComponent,
    NavBarComponent,
    HomeComponent,
    LoginComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FlexLayoutModule,
    RouterModule,
    SocialLoginModule,
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
