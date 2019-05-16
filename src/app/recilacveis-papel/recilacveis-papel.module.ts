import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RecilacveisPapelPage } from './recilacveis-papel.page';

const routes: Routes = [
  {
    path: '',
    component: RecilacveisPapelPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RecilacveisPapelPage]
})
export class RecilacveisPapelPageModule {}
