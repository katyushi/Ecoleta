import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RecilacveisPlasticoPage } from './recilacveis-plastico.page';

const routes: Routes = [
  {
    path: '',
    component: RecilacveisPlasticoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RecilacveisPlasticoPage]
})
export class RecilacveisPlasticoPageModule {}
