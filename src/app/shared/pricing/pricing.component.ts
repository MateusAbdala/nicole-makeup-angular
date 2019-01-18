import { Component, OnInit } from '@angular/core';
import { BeautyServicesService } from 'src/app/services/beauty-services.service';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
export class PricingComponent implements OnInit {

  private beautyServices: Array<any> = [];

  constructor(private beautyServicesService: BeautyServicesService) { }

  ngOnInit(): void {
    this.fetchBeatyServices();
  }

  fetchBeatyServices(): void {
    this.beautyServicesService.getBeautyServices().subscribe((resp: any) => this.beautyServices = resp);
  }

}
