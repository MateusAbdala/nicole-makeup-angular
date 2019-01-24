import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class loginComponent implements OnInit {

  form: FormGroup;

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private toastr: ToastrService,
    protected router: Router
  ) { }

  ngOnInit(): void {
    this.formCreator();
  }

  formCreator(): void {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit({ value, valid }: { value: any, valid: boolean }): void {
    if (valid) {
      // todo: remove next two lines
      localStorage.setItem('token', 'yeah boooyyy');
      this.router.navigate(['/cadastro']);

      this.authService.authenticateUser(value).subscribe(
        (resp: string) => {
          this.toastr.success('logado!', 'Login');
          localStorage.setItem('token', resp);
          this.router.navigate(['/cadastro']);
        },
        (error: Error) => {
          this.toastr.error(error.message, 'Login');
        }
      );
    }
  }

}
