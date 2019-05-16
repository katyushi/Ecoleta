import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'principal', loadChildren: './principal/principal.module#PrincipalPageModule' },
  { path: 'cadastro', loadChildren: './cadastro/cadastro.module#CadastroPageModule' },
  { path: 'como-reciclar', loadChildren: './como-reciclar/como-reciclar.module#ComoReciclarPageModule' },
  { path: 'reciclaveis-info', loadChildren: './reciclaveis-info/reciclaveis-info.module#ReciclaveisInfoPageModule' },
  { path: 'recilacveis-papel', loadChildren: './recilacveis-papel/recilacveis-papel.module#RecilacveisPapelPageModule' },
  { path: 'recilacveis-plastico', loadChildren: './recilacveis-plastico/recilacveis-plastico.module#RecilacveisPlasticoPageModule' },
  { path: 'recilacveis-metal', loadChildren: './recilacveis-metal/recilacveis-metal.module#RecilacveisMetalPageModule' },
  { path: 'recilacveis-vidro', loadChildren: './recilacveis-vidro/recilacveis-vidro.module#RecilacveisVidroPageModule' },
  { path: 'converse', loadChildren: './converse/converse.module#ConversePageModule' },
  { path: 'denuncias', loadChildren: './denuncias/denuncias.module#DenunciasPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
