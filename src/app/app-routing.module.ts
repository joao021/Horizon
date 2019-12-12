import { RegistroComponent } from "./registro/registro.component";
import { ViewContractComponent } from "./contract/view-contract/view-contract.component";
import { EditContractComponent } from "./contract/edit-contract/edit-contract.component";
import { ContractComponent } from "./contract/contract.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "contract",
    component: ContractComponent
  },
  {
    path: "registro",
    component: RegistroComponent
  },
  {
    path: "edit/:id",
    component: EditContractComponent
  },
  {
    path: "view/:id",
    component: ViewContractComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
