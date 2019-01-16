import { Component, OnInit } from '@angular/core';
import { InstitutionalService } from '../services/institutional.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  private institutionalData: any;

  constructor(private institutionalService: InstitutionalService) { }

  ngOnInit(): void {
    this.fetchInstitutionalData();
  }

  fetchInstitutionalData(): void {
    this.institutionalService.getInstitutionalData().subscribe((resp: any) => this.institutionalData = resp);
  }
}
