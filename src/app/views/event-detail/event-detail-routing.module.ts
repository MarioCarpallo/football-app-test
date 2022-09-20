import { NgModule } from '@angular/core';
import { MainEventDetailComponent } from './main-event-detail/main-event-detail.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
  path: '',
  component: MainEventDetailComponent,
}]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class EventDetailRoutingModule { }