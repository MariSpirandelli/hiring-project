import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RiskDetailsComponent } from './risk-details/risk-details.component';
import { RiskListComponent } from './risk-list/risk-list.component';

const routes: Routes = [
  {path: '', component: RiskListComponent},
  {path: 'risks', component: RiskListComponent},
  { path: 'risks/:id', component: RiskDetailsComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule {}
