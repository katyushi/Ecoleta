import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ReciclaveisInfoPage } from './reciclaveis-info.page';

const routes: Routes = [
  {
    path: '',
    component: ReciclaveisInfoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ReciclaveisInfoPage]
})
export class ReciclaveisInfoPageModule {}
