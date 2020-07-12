import { Component, OnInit } from '@angular/core';
import { CovidDataService } from '../covid-data.service';
import { Observable } from "rxjs";


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
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
        console.log(this.case[0].confirmed);
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
  ngOnInit():void{}
}
