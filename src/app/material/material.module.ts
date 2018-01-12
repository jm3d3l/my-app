import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule, 
  MatCardModule, 
  MatFormFieldModule, 
  MatInputModule,
  MatIconModule,
  MatTooltipModule,
  MatTabsModule,
  MatDialogModule,
  MatToolbarModule
  
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule, 
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatTooltipModule,
    MatTabsModule,
    MatDialogModule,
    MatToolbarModule
    
  ],
  exports : [
    CommonModule, 
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatTooltipModule,
    MatTabsModule,
    MatDialogModule,
    MatToolbarModule
      
  ],
  declarations: []
})
export class MaterialModule { }
