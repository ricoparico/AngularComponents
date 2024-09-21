import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingpageComponent } from './components/landingpage/landingpage.component';
import { DisplayhelloworldComponent } from './components/displayhelloworld/displayhelloworld.component';
import { ShowhellobuttonComponent } from './components/showhellobutton/showhellobutton.component';
import { DisplaynameComponent } from './components/displayname/displayname.component';
import { CounterComponent } from './components/counter/counter.component';
import { SimpleformComponent } from './components/simpleform/simpleform.component';

const routes: Routes = [
  {path:"", component:LandingpageComponent}, 
  {path:"displayhelloworld", component: DisplayhelloworldComponent},
  {path:"showhellobutton", component: ShowhellobuttonComponent},
  {path:"displayname", component: DisplaynameComponent},
  {path:"counter", component: CounterComponent},
  {path:"simpleform", component: SimpleformComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
