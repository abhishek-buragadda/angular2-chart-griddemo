import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {CdkTableModule} from '@angular/cdk';
import {AppComponent} from './app.component';
import { ChartModule } from 'angular2-highcharts';
import {MdTableModule} from '@angular/material';

import {MdSortModule} from '@angular/material';
import {AngularGridComponent} from './angular-grid/angular-grid.component';
import { HighchartDemoComponent } from './highchart-demo/highchart-demo.component';

declare var require: any;

@NgModule({
  declarations: [
    AppComponent,
    AngularGridComponent,
    HighchartDemoComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MdTableModule,
    CdkTableModule,
    MdSortModule,
    ChartModule.forRoot(require('highcharts'))
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
