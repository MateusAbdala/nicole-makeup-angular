import { Component, OnInit } from '@angular/core';
import { BeautyServicesService } from 'src/app/services/beauty-services.service';

@Component({
  selector: 'app-beauty-services-data',
  templateUrl: './beauty-services-data.component.html',
  styleUrls: ['./beauty-services-data.component.scss']
})
export class BeautyServicesDataComponent implements OnInit {
  
  private beautyServices: Array<any> = [];

  constructor(private beautyServicesService: BeautyServicesService) { }

  ngOnInit(): void {
    this.fetchBeatyServices();
  }

  fetchBeatyServices(): void {
    this.beautyServicesService.getBeautyServices().subscribe((resp: any) => this.beautyServices = resp);
  }

}
