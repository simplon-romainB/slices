import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { MarsnumbersComponent } from './marsnumbers/marsnumbers.component';
import { MarsphotosComponent } from './marsphotos/marsphotos.component';
import { MarsweatherComponent } from './marsweather/marsweather.component';

const routes: Routes = [ {path: 'weather', component: MarsweatherComponent},
                         {path: 'photos', component: MarsphotosComponent},
                         {path: 'numbers', component: MarsnumbersComponent}

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
