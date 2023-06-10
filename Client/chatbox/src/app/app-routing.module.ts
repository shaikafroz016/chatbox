import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponentsComponent } from './Components/login-components/login-components.component';
import { RegisterComponentComponent } from './Components/register-component/register-component.component';
import { routerguardGuard } from './routerguard.guard';

const routes: Routes = [
  {path:"", component:LoginComponentsComponent},
  {path:"register",component:RegisterComponentComponent,canActivate:[routerguardGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
