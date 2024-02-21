import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgForm, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule,ReactiveFormsModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
    title = 'Reactive forms validation in Angular 17';
    data: any;

    constructor(private loginService: LoginService) {}

    form = {
      fullname: '',
      username: '',
      email: '',
      password: '',
      acceptTerms: false,
    };
    ngOnInit(){
      this.fetchData();
    }

    onSubmit(): void {
      console.log(JSON.stringify(this.form));
    }

    onReset(form: NgForm): void {
      form.resetForm();
  } 

    private fetchData(): void {
      console.log(JSON.stringify(this.form));
      //this.loginService.getData();
      this.loginService.getData().subscribe(result => {
          this.data = result;
          console.log(this.data);
      });
    }  
}
