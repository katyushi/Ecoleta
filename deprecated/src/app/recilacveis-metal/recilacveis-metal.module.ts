import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RecilacveisMetalPage } from './recilacveis-metal.page';

const routes: Routes = [
  {
    path: '',
    component: RecilacveisMetalPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RecilacveisMetalPage]
})
export class RecilacveisMetalPageModule {}
