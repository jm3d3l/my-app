import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './material/material.module';
import { LoginComponent } from './login/login.component';
import { BodypartsComponent } from './bodyparts/bodyparts.component';
import { AccessoriesComponent } from './accessories/accessories.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SparepartsComponent } from './spareparts/spareparts.component';
import { ProductsComponent } from './products/products.component';

export const appRoutes: Routes = [
   {
    path: 'accessories',
    component : AccessoriesComponent
  },
  {
    path: 'bodypart',
    component : BodypartsComponent
  },
  {
   path : 'spareparts',
   component : SparepartsComponent
  },
  { path: '',
   redirectTo: '/accessories', 
   pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes),
    MaterialModule,
    FlexLayoutModule
  ],
  exports : [
    RouterModule,

   
  ],
  declarations: [
    LoginComponent
  ],
  entryComponents : [
    LoginComponent,
    ProductsComponent
  ]
})
export class ApprouteModule { }
