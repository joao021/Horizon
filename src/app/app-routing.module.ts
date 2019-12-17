import { RegistroComponent } from "./registro/registro.component";
import { ViewContractComponent } from "./contract/view-contract/view-contract.component";
import { EditContractComponent } from "./contract/edit-contract/edit-contract.component";
import { ContractComponent } from "./contract/contract.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SobreComponent } from './sobre/sobre.component';
import { SolucoesComponent } from './solucoes/solucoes.component';
import { ContatoComponent } from './contato/contato.component';

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
  },
  {
    path: "sobre",
    component: SobreComponent
  },
  {
    path: "solucoes",
    component: SolucoesComponent
  },
  {
    path: "contato",
    component: ContatoComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
