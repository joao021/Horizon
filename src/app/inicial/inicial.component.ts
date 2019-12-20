import { Router } from '@angular/router';
import { NotificationService } from './../config/notification.service';
import { AlertService } from './../../shared/alert.service';
import { Component, OnInit } from '@angular/core';

import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-inicial',
  templateUrl: './inicial.component.html',
  styleUrls: ['./inicial.component.scss']
})
export class InicialComponent implements OnInit {
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
      nome: new FormControl(''),
      email: new FormControl('')
    });
  }
}
