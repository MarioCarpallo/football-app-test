import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeModule } from './views/home/home.module';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./views/home/home.module').then(m => m.HomeModule),
    data: {title: 'Eventos - Lista de eventos de Fútbol'}
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'event-detail',
    loadChildren: () => import('./views/event-detail/event-detail.module').then(m => m.EventDetailModule),
    data: {title: 'Eventos - Detalle del Partido'}
  },
  {
    path: '**', 
    redirectTo: '/home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
