import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, BaseChartDirective, Label } from 'ng2-charts';
import * as pluginAnnotations from 'chartjs-plugin-annotation';

@Component({
  selector: 'app-e-gfr',
  templateUrl: './e-gfr.component.html',
  styleUrls: ['./e-gfr.component.css']
})
export class EGFRComponent implements OnInit {

  public lineChartData: ChartDataSets[] = [
    { data: [
        {
          x: new Date('2016-12-12T00:00:00Z'),
          y: 64
        },
        {
          x: new Date('2017-01-10T00:00:00Z'),
          y: 59
        },
        {
          x: new Date('2017-02-11T00:00:00Z'),
          y: 58
        },
        {
          x: new Date('2017-03-11T00:00:00Z'),
          y: 57
        },
        {
          x: new Date('2017-04-23T00:00:00Z'),
          y: 53
        },
        {
          x: new Date('2017-05-21T00:00:00Z'),
          y: 14
        }],
      label: 'eGFR', fill: false},

  ];

  /* public lineChartLabels: Label[] = ['12/12/16', '1/10/17', '02/11/17', '03/11/17', '04/23/17', '05/21/17'];
  */
  /* public lineChartLabels: Label[] = [];
  */

  public lineChartLabels: Label[] = ['Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May'];

  public lineChartOptions = {
    responsive: false,
    maintainAspectRatio: true,
    scales: {
      yAxes: {
        id: 'y-axis-0',
        type: 'linear',
        ticks: {
          suggestedMax: 100,
          suggestedMin: 0
        }
      },
      xAxes: {
        id: 'x-axis-0',
        type: 'time',
        ticks: {
          suggestedMin:  new Date('2016-11-30'),
          suggestedMax: new Date( '2017-06-01')
        },
        time: {
          unit: 'day',
          displayFormats: {
            day: 'MMM D'
          },
          tooltipFormat: 'll D MMM'
        }
      }
    },
    annotation: {
      annotations: [
        {
          drawTime: 'beforeDatasetsDraw',
          type: 'box',
          id: 'egfr-critical',
          xScaleID: 'x-axis-0',
          yScaleID: 'y-axis-0',
          borderWidth: 0,
          yMin: 0,
          yMax: 15,
          backgroundColor: 'rgba(227, 127, 104,0.3)'
        },
        {
          drawTime: 'beforeDatasetsDraw',
          type: 'box',
          id: 'egfr-warning',
          xScaleID: 'x-axis-0',
          yScaleID: 'y-axis-0',
          borderWidth: 0,
          yMin: 15,
          yMax: 60,
          backgroundColor: 'rgba(247, 245, 116,0.3)'
        },
        {
          drawTime: 'beforeDatasetsDraw',
          type: 'box',
          id: 'egfr-ok',
          xScaleID: 'x-axis-0',
          yScaleID: 'y-axis-0',
          borderWidth: 0,
          yMin: 60,
          yMax: 100,
          backgroundColor: 'rgba(128, 204, 113,0.3)'
        }
      ]
    }
  };

  public lineChartColors: Color[] = [
    {
      borderColor: 'black',
    },
  ];

  public lineChartLegend = false;
  public lineChartPlugins =  [pluginAnnotations];
  public lineChartType = 'line';

  constructor() { }

  ngOnInit(): void {
   }

}
