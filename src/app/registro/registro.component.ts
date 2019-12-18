import { Router } from "@angular/router";
import { NotificationService } from "./../config/notification.service";
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators
} from "@angular/forms";
import { Component, OnInit } from "@angular/core";

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
      nome: new FormControl("", [Validators.required]),
      contractNumber: new FormControl("", [Validators.required]),
      email: new FormControl("", [Validators.required]),
      cpf: new FormControl("", [Validators.required]),
      rg: new FormControl("", [Validators.required]),
      o_e: new FormControl("", [Validators.required]),
      data_e: new FormControl("", [Validators.required]),
      t_e: new FormControl("",),
      zs: new FormControl("",),
      d_n: new FormControl("", [Validators.required]),
      nacionalidade: new FormControl("", [Validators.required]),
      nomepai: new FormControl("", [Validators.required]),
      nomemae: new FormControl("", [Validators.required]),
      np: new FormControl("", [Validators.required]),
      ch: new FormControl("", [Validators.required]),
      cep: new FormControl("", [Validators.required]),
      end: new FormControl("", [Validators.required]),
      mmm: new FormControl(""),
    });
  }

  register() {
    this.alertService.showSuccess("Documento salvo com sucesso");
  }
}
