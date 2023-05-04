import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formValue = {
    email: 'a@b.c',
    password: 'A12345678c'
  };

  constructor() {}

  login(form: NgForm, submit: any) {
    console.log(form.value, form.valid);
    // console.log(submit);
    console.log(this.formValue);
  }

  ngOnInit(): void { }
}
