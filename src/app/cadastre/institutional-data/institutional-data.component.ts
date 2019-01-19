import { Component, OnInit } from '@angular/core';
import { InstitutionalService } from 'src/app/services/institutional.service';

@Component({
  selector: 'app-institutional-data',
  templateUrl: './institutional-data.component.html',
  styleUrls: ['./institutional-data.component.scss']
})
export class InstitutionalDataComponent implements OnInit {

  private institutionalData: any;

  constructor(private institutionalService: InstitutionalService) { }

  ngOnInit(): void {
    this.fetchInstitutionalData();
  }

  fetchInstitutionalData(): void {
    this.institutionalService.getInstitutionalData().subscribe((resp: any) => this.institutionalData = resp);
  }

}
