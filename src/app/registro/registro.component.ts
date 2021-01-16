import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../config/notification.service';
import { Router } from '@angular/router';


@Component({
  selector: "app-registro",
  templateUrl: "./registro.component.html",
  styleUrls: ["./registro.component.scss"]
})
export class RegistroComponent implements OnInit {
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
      nome: new FormControl(""),
      contractNumber: new FormControl("", [Validators.required]),
      email: new FormControl("", [Validators.required]),
      cpf: new FormControl("", [Validators.required]),
      rg: new FormControl("", [Validators.required]),
      o_e: new FormControl("", [Validators.required]),
      data_e: new FormControl("", [Validators.required]),
      t_e: new FormControl("",),
      zs: new FormControl("",),
      d_n: new FormControl("", [Validators.required]),
      nacionalidade: new FormControl("",),
      nomepai: new FormControl("",),
      nomemae: new FormControl("",),
      np: new FormControl("",),
      ch: new FormControl("",),
      cep: new FormControl("",),
      end: new FormControl("",),
      mmm: new FormControl(""),
    });
  }

  register() {
    this.alertService.showSuccess("Cadastrado com sucesso");
  }
}
