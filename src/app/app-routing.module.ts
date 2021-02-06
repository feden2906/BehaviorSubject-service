import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';

import {NgModule} from '@angular/core';
import {AComponent, BComponent} from './components';


const routes: Routes = [
  {path: 'a', component: AComponent},
  {path: 'b', component: BComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
