import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RecilacveisVidroPage } from './recilacveis-vidro.page';

const routes: Routes = [
  {
    path: '',
    component: RecilacveisVidroPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RecilacveisVidroPage]
})
export class RecilacveisVidroPageModule {}
