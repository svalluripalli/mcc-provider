import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, BaseChartDirective, Label } from 'ng2-charts';
import * as pluginAnnotations from 'chartjs-plugin-annotation';

@Component({
  selector: 'app-uacr',
  templateUrl: './uacr.component.html',
  styleUrls: ['./uacr.component.css']
})
export class UACRComponent implements OnInit {
  public lineChartData: ChartDataSets[] = [
    { data: [
        {
          x: new Date('2016-12-12T00:00:00Z'),
          y: 28
        },
        {
          x: new Date('2017-01-10T00:00:00Z'),
          y: 31
        },
        {
          x: new Date('2017-02-11T00:00:00Z'),
          y: 32
        },
        {
          x: new Date('2017-03-11T00:00:00Z'),
          y: 35
        },
        {
          x: new Date('2017-04-23T00:00:00Z'),
          y: 37
        },
        {
          x: new Date('2017-05-21T00:00:00Z'),
          y: 301
        }],
      label: 'eGFR', fill: false},

  ];

  public lineChartLabels: Label[] = ['Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May'];

  public lineChartOptions = {
    responsive: false,
    maintainAspectRatio: true,
    scales: {
      yAxes: {
        id: 'y-axis-0',
        type: 'linear',
        ticks: {
          suggestedMax: 400,
          suggestedMin: 0
        }
      },
      xAxes: {
        id: 'x-axis-0',
        type: 'time',
        ticks: {
          suggestedMin: new Date('2016-11-30'),
          suggestedMax: new Date( '2017-06-01')
        },
        time: {
          unit: 'day',
          displayFormats: {
            day: 'MMM D'
          },
          tooltipFormat: 'll MMM D'
        }
      }
    },
    annotation: {
      annotations: [{
        drawTime: 'beforeDatasetsDraw',
        type: 'box',
        id: 'uacr-ok',
        xScaleID: 'x-axis-0',
        yScaleID: 'y-axis-0',
        borderWidth: 0,
        yMin: 0,
        yMax: 30,
        backgroundColor: 'rgba(128, 204, 113,0.3)'
      },
        {
          drawTime: 'beforeDatasetsDraw',
          type: 'box',
          id: 'uacr-warning',
          xScaleID: 'x-axis-0',
          yScaleID: 'y-axis-0',
          borderWidth: 0,
          yMin: 30,
          yMax: 300,
          backgroundColor: 'rgba(247, 245, 116,0.3)'
        },
        {
          drawTime: 'beforeDatasetsDraw',
          type: 'box',
          id: 'uacr-critical',
          xScaleID: 'x-axis-0',
          yScaleID: 'y-axis-0',
          borderWidth: 0,
          yMin: 300,
          yMax: 400,
          backgroundColor: 'rgba(227, 127, 104,0.3)'
        }
      ]
    }
  };

  public lineChartColors: Color[] = [
    {
      backgroundColor: 'white',
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
