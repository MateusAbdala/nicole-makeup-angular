import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';
import { InstitutionalService } from 'src/app/services/institutional.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-institutional-data',
  templateUrl: './institutional-data.component.html',
  styleUrls: ['./institutional-data.component.scss']
})
export class InstitutionalDataComponent implements OnInit {

  form: FormGroup;
  submitted = false;

  private institutionalData: any;

  constructor(
    private institutionalService: InstitutionalService,
    private fb: FormBuilder,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.fetchInstitutionalData();
  }

  fetchInstitutionalData(): void {
    this.institutionalService.getInstitutionalData().subscribe(
      (resp: any) => {
        this.institutionalData = resp;
        this.formFiller();
      },
      (error: Error) => {
        this.toastr.error(error.message, 'Institucional');
      }
    );
  }

  formFiller(): void {
    this.form = this.fb.group({
      facebook: [this.institutionalData.facebook, Validators.required],
      whatsApp: [this.institutionalData.whatsApp, Validators.required],
      instagram: [this.institutionalData.instagram, Validators.required],
      phone: [this.institutionalData.phone, Validators.required],
      email: [this.institutionalData.email, Validators.required],
      location: this.fb.group({
        address: [this.institutionalData.location.address, Validators.required],
        city: [this.institutionalData.location.city, Validators.required],
        latitude: [this.institutionalData.location.latitude, Validators.required],
        longitude: [this.institutionalData.location.longitude, Validators.required]
      })
    });
  }

  onSubmit({ value, valid }: { value: any, valid: boolean }): void {
    if (valid) {
      this.institutionalService.sendInstitutionalData(value).subscribe(
        () => {
          this.fetchInstitutionalData();
        },
        (error: Error) => {
        this.toastr.error(error.message, 'Institucional');
      }
      );
    }
  }

}
