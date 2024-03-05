import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CadastroProdutoComponent } from './cadastro-produto/cadastro-produto.component';
import { AtualizarProdutoComponent } from './atualizar-produto/atualizar-produto.component';
import { ListaProdutoComponent } from './listar-produto/listar-produto.component';
import { RestritoComponent } from './restrito.component';
import { GuardGuard } from '../guard.guard';

const restritoRoutes: Routes = [
    {       path: 'restrito', component: RestritoComponent, children: [
            {path: 'cadastro', component: CadastroProdutoComponent, canActivate:[GuardGuard]},
            {path: 'lista', component: ListaProdutoComponent,canActivate:[GuardGuard] },
            {path: 'editar/id', component: AtualizarProdutoComponent,canActivate:[GuardGuard] },
        ]
    },
    { path: '', redirectTo: '/restrito/lista', pathMatch: 'full' }
]

@NgModule({
    declarations: [],
    imports: [RouterModule.forChild(restritoRoutes)],
    exports: [RouterModule]
})

export class RestritoRoutingModule { }