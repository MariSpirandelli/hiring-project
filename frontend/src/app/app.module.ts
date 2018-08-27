import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material/material.module';
import { AppRoutingModule } from './app-routing.module';
import { RiskDetailsComponent } from './risk-details/risk-details.component';
import { RiskListComponent } from './risk-list/risk-list.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    RiskDetailsComponent,
    RiskListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    MaterialModule,
    AppRoutingModule
  ],
  providers: [
    AppService
  ],
  exports: [RiskDetailsComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
