import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponentsComponent } from './Components/login-components/login-components.component';
import { RegisterComponentComponent } from './Components/register-component/register-component.component';
import { routerguardGuard } from './routerguard.guard';
import { ChatComponent } from './chat/chat.component';

const routes: Routes = [
  {path:"", component:ChatComponent,canActivate:[routerguardGuard]},
  {path:"login",component:LoginComponentsComponent,canActivate:[routerguardGuard]},
  {path:"register",component:RegisterComponentComponent,canActivate:[routerguardGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
