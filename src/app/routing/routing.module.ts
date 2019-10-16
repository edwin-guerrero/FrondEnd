import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { HomeComponent } from '../Componentes/home/home.component';
import { EspeciesComponent } from '../Componentes/especies/especies.component';
import { NavesComponent } from '../Componentes/naves/naves.component';
import { PeliculasComponent } from '../Componentes/peliculas/peliculas.component';
import { PersonajesComponent } from '../Componentes/personajes/personajes.component';
import { PlanetasComponent } from '../Componentes/planetas/planetas.component';
import { VehiculosComponent } from '../Componentes/vehiculos/vehiculos.component';


const appRoutes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'especies', component: EspeciesComponent},
  { path: 'naves', component: NavesComponent},
  { path: 'peliculas', component: PeliculasComponent},
  { path: 'personajes', component: PersonajesComponent},
  { path: 'planetas', component: PlanetasComponent},
  { path: 'vehiculos', component: VehiculosComponent},
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule,
            CommonModule,
  ]
})
export class RoutingModule { }
