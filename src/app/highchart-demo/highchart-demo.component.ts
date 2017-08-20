import { Component } from '@angular/core';

@Component({
  selector: 'app-chart-demo',
  templateUrl: './highchart-demo.component.html',
  styleUrls: ['./highchart-demo.component.css']
})
export class HighchartDemoComponent  {

  constructor() {
    this.options = {
      chart: { type: 'spline', width: 500 },
      title: { text : 'dynamic data example'},
      series: [{ data: [2,3,5,8,13] }]
    };
    setInterval(() => this.chart.series[0].addPoint(Math.random() * 10), 1000);
  }
  chart;
  options;
  saveInstance(chartInstance) {
    this.chart = chartInstance;
  }

}
