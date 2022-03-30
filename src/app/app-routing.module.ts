import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./auth/dashboard/dashboard.component";
import { LoginComponent } from "./auth/login/login.component";
import { RegisterComponent } from "./auth/register/register.component";

//como crear rutas y hacerlas dinamicas redireccionandolas entre componentes q tu desees.
const routes: Routes = [
  {path: 'login' , component:LoginComponent},
  {path: 'register' , component:RegisterComponent},
  {path:'',component:DashboardComponent},
  // los "**" es para indicar q cualquier otra direccion que haga y no pertenezca a ningun lado lo redireccione al punto principal q seria el dashboard
  {path:'**' , redirectTo:''}

]

@NgModule({
// archivos de rutas principales cuando usamos el forRoot()
  imports: [
      RouterModule.forRoot(routes)
  ],
  //exportamos el routerModule para q se pueda usar en otro lado.
  exports:[
    RouterModule
  ]

})

export class AppRoutingModule {}
