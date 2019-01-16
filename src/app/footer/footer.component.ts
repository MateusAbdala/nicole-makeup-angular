import { Component, OnInit } from '@angular/core';
import { InstitutionalService } from '../services/institutional.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  private institutionalData: any;

  constructor(private institutionalService: InstitutionalService) { }

  ngOnInit(): void {
    this.fetchInstitutionalData();
  }

  fetchInstitutionalData(): void {
    this.institutionalService.getInstitutionalData().subscribe((resp: any) => this.institutionalData = resp);
  }

}
