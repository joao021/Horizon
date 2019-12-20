import { Router } from '@angular/router';
import { NotificationService } from './../config/notification.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formulario: FormGroup;
  constructor(
    private fb: FormBuilder,
    private alertService: NotificationService,
    private rota: Router
  ) {}

  ngOnInit() {
    this.mountForm();
  }


mountForm() {
  this.formulario = this.fb.group({
    senha: new FormControl("", [Validators.required]),
    email: new FormControl("", [Validators.required]),
  });
}
}