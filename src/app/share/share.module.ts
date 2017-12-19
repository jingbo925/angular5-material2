import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatInputModule,
  MatListModule,
  MatDialogModule,
  MatAutocompleteModule,
  MatSlideToggleModule,
  MatMenuModule,
  MatCardModule} from '@angular/material'
@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatSlideToggleModule,
    MatDialogModule,
    MatAutocompleteModule,
    MatMenuModule
  ],
  exports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatSlideToggleModule,
    MatDialogModule,
    MatAutocompleteModule,
    MatMenuModule
  ],
  declarations: []
})
export class ShareModule { }
