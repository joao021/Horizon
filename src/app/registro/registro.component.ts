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
    private alertService: NotificationService
  ) {}

  ngOnInit() {
    this.mountForm();
  }

  mountForm() {
    this.formulario = this.fb.group({
      contractNumber: new FormControl("", [Validators.required])
    });
  }
  register() {
    this.alertService.showSuccess("Documento salvo com sucesso");
  }
}
