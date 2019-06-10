import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutComponent } from './components/admin-layout/admin-layout.component';
import { RouterModule } from '@angular/router';
import { UserLayoutComponent } from './components/user-layout/user-layout.component';

@NgModule({
  declarations: [AdminLayoutComponent, UserLayoutComponent],
  exports: [AdminLayoutComponent, UserLayoutComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class LayoutModule { }
