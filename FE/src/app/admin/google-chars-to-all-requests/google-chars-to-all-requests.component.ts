import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartComponent } from 'ng-apexcharts';
import {Location} from '@angular/common';
import { RequserCustomerService } from 'src/app/services/requser-customer.service';
import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart
} from "ng-apexcharts";
export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
};
@Component({
  selector: 'app-google-chars-to-all-requests',
  templateUrl: './google-chars-to-all-requests.component.html',
  styleUrls: ['./google-chars-to-all-requests.component.sass']
})
export class GoogleCharsToAllRequestsComponent implements OnInit {

  breadscrums = [
    {
      title: 'אחוז בקשות',
      items: ['כללי'],
      active: 'אחוז בקשות',
    },
  ];
  idTech:number;
  iscomplete:number=0;
  isNotcomplete:number=0;
  notAttach:number=0;
ngOnInit(): void {
this.requserCustomerService.getAllRequestCustomerByComletedOrNotOrAttach().subscribe(data=>{
    this.iscomplete=data[0];
    this.notAttach=data[1];
    this.isNotcomplete=data[2];
    
  this.chartOptions = {
    series: [this.iscomplete , this.isNotcomplete,this.notAttach],
    chart: {
      width: 380,
      type: "pie"
    },
    labels: ["פניות טופלה", "פניות בטיפול","פניות בהמתנה"],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: "bottom"
          }
        }
      }
    ]
  };
  })

  
}

@ViewChild("chart") chart: ChartComponent;
public chartOptions: Partial<ChartOptions>;

constructor(
  private _location: Location,
private requserCustomerService:RequserCustomerService,

) {}

backToList(){
  this._location.back();
}

}
