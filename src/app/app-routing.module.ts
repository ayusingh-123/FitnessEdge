import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BmiComponent } from './bmi/bmi.component';
import { BodyComponent } from './body/body.component';


const routes: Routes = [
  { path : 'body', component: BodyComponent},
  { path: 'bmi', component: BmiComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
