import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartComponent } from "ng-apexcharts";
import {
    ApexNonAxisChartSeries,
    ApexResponsive,
    ApexChart
  } from "ng-apexcharts";
import { ActivatedRoute, Router } from '@angular/router';
import { RequserCustomerService } from 'src/app/services/requser-customer.service';
  export type ChartOptions = {
    series: ApexNonAxisChartSeries;
    chart: ApexChart;
    responsive: ApexResponsive[];
    labels: any;
  };
@Component({
  selector: 'app-google-charms-to-technician',
  templateUrl: './google-charms-to-technician.component.html',
  styleUrls: ['./google-charms-to-technician.component.sass']
})
export class GoogleCharmsToTechnicianComponent implements OnInit {
    breadscrums = [
        {
          title: 'אחוז בקשות לטכנאי',
          items: ['טכנאי'],
          active: 'אחוז בקשות לטכנאי ',
        },
      ];
      idTech:number;
      iscomplete:number=0;
      isNotcomplete:number=0;
  ngOnInit(): void {
    this.idTech=this.route.snapshot.params['idrow'];
    this.requserCustomerService.getRequsetCustomerBycompleteByIdTech(this.idTech).subscribe(data=>{
        this.iscomplete=data[0];
        this.isNotcomplete=data[1];
      this.chartOptions = {
        series: [this.iscomplete , this.isNotcomplete],
        chart: {
          width: 380,
          type: "pie"
        },
        labels: ["פניות סגורות", "פניות פתחות"],
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
    private route:ActivatedRoute,
    private requserCustomerService:RequserCustomerService,
    private router:Router,
 ) {}

 backToList(){
    this.router.navigate(['/admin/allTechnician'])
  }
}
