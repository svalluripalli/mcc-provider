import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-testgraph1',
  templateUrl: './testgraph1.component.html',
  styleUrls: ['./testgraph1.component.css']
})

export class Testgraph1Component implements OnInit {
  public barChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      // xAxes: [{
      //   type: 'time',
      //   time: {
      //     unit: 'month'
      //   }
      // }],
      // yAxes: [{
      //   ticks: {
      //     suggestedMax: 10,
      //     suggestedMin: 0
      //   }
      // }]
      xAxes: [{
        type: 'time',
        distribution: 'linear',
        time: {
          unit: 'month'
        }
      }],
      yAxes: [{
        ticks: {
          suggestedMax: 10,
          suggestedMin: 0
        }
      }]
    }
  };

  public barChartType: ChartType = 'line';
  public barChartLegend = true;
  public barChartData: ChartDataSets[] = [
    { data: [
        {x: new Date('2020-02-20'), y: '1'},
        {x: new Date('2020-03-22'), y: '2'},
        {x: new Date('2020-03-23'), y: '6'},
        {x: new Date('2020-05-24'), y: '8'}
      ],
      fill: false,
      label: 'TEST 1'
    },
    { data: [
        {x: new Date('2020-01-22'), y: '7'},
        {x: new Date('2020-02-24'), y: '4'},
        {x: new Date('2020-03-26'), y: '1'},
        {x: new Date('2020-04-29'), y: '9'}
      ],
      fill: false,
      label: 'TEST 2'
    },
  ];


  constructor() { }


  ngOnInit(): void {
  }

}
