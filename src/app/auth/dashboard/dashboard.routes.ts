import { Routes } from "@angular/router";
import { DetalleComponent } from "src/app/ingreso-egreso/detalle/detalle.component";
import { EstadisticaComponent } from "src/app/ingreso-egreso/estadistica/estadistica.component";
import { IngresoEgresoComponent } from "src/app/ingreso-egreso/ingreso-egreso.component";

export const dashboardRoutes: Routes = [

  {path:'', component:EstadisticaComponent},
  {path:'ingreso-egreso',component:IngresoEgresoComponent},
  {path:'detalle' , component:DetalleComponent}
];
