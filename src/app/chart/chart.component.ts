import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions} from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { CovidDataService } from '../covid-data.service';
import { ChartType } from 'chart.js';
import { MultiDataSet, SingleDataSet } from 'ng2-charts';
import {  RadialChartOptions } from 'chart.js';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  confirm = 0;
  recover = 0;
  death = 0;
  active = 0;


  case = [];
  cfcase = [];
  rccase = [];
  dcase = [];
  stateLabel = [];
  dataItem = [];
  activecase = [];
  constructor(private ds: CovidDataService) {
    this.ds.getService().subscribe(
      data => {
        this.case = data;
        console.log(this.case[0].confirm);
        for (let i = 0; i < data.length; i++) {
          this.stateLabel.push(this.case[i].provinceState);
          this.cfcase.push(this.case[i].confirmed);
          this.rccase.push(this.case[i].recovered);
          this.dcase.push(this.case[i].deaths);
          this.activecase.push(this.case[i].active);
          this.confirm = this.confirm + this.case[i].confirmed;
          this.recover = this.recover + this.case[i].recovered;
          this.death = this.death + this.case[i].deaths;
          this.active = this.active + this.case[i].active;
        }
        this.dataItem.push(this.confirm);
        this.dataItem.push(this.recover);
        this.dataItem.push(this.death);
        this.dataItem.push(this.active)
        console.log(this.confirm);
        console.log(this.recover);
        console.log(this.death);
        console.log(this.case)
      },
      err => console.log("error", err),
      () => console.log("finally")
    )
  }

  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLabels: Label[] = this.stateLabel;
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];

  barChartData: ChartDataSets[] = [
    { data: this.cfcase, label: 'Confirmed' },
    { data: this.rccase, label: 'Recovered' },
    { data: this.dcase, label: 'Death' }
  ];
  doughnutChartLabels: Label[] = ['Confirmed', 'Recovered', 'Deaths', 'Active'];
  doughnutChartData: MultiDataSet = this.dataItem;
  doughnutChartType: ChartType = 'doughnut';
  doughnutChartColors: Color[] = [{backgroundColor:['rgba(159,204,0,0.5)', 'rgba(250,109,33,0.7)', 'rgba(0,139,139,0.7)','rgba(154,154,154,0.5)']}];

  public radarChartOptions: RadialChartOptions = {
    responsive: true,
  };
  public radarChartLabels: Label[] = ['Confirmed', 'Recovered', 'Deaths', 'Active'];

  public radarChartData: ChartDataSets[] = [
    { data: this.cfcase, label: 'Confirmed' },
    { data: this.rccase, label: 'Recovered'},
    { data: this.dcase, label: 'Deaths'},
    { data: this.activecase, label: 'Active'}
  ];
  public radarChartType: ChartType = 'radar';
  public polarAreaChartLabels: Label[] = ['Confirmed', 'Recovered', 'Deaths', 'Active'];
  public polarAreaChartData: SingleDataSet = this.dataItem;
  public polarAreaLegend = true;
  public polarChartColors: Color[] = [{backgroundColor:['rgba(159,204,0,0.5)', 'rgba(250,109,33,0.7)', 'rgba(0,139,139,0.7)','rgba(154,154,154,0.5)']}];

  public polarAreaChartType: ChartType = 'polarArea';
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }
 
  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }
  lineChartData: ChartDataSets[] = [
    { data: this.cfcase, label: 'Confirmed' },
    { data: this.dcase, label: 'Deaths'},
    { data: this.activecase, label: 'Active'}
  ];

  lineChartLabels: Label[] = ['Confirmed', 'Recovered', 'Deaths', 'Active'];

  lineChartOptions = {
    responsive: true,
  };

  lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: ['rgba(120, 230, 100  ,0)', 'rgba(250,120,33,0)', 'rgba(145,139,150,0)','rgba(154,0,154,0.5)']
    }
  ];

  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType = 'line';
  ngOnInit(): void {
  }

} 

