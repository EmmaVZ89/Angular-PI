import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-encuesta',
  templateUrl: './encuesta.component.html',
  styleUrls: ['./encuesta.component.css'],
})
export class EncuestaComponent implements OnInit {
  userLogged: any = null;
  formulario: FormGroup;
  nombreValido: string | boolean;
  apellidoValido: string | boolean;
  edadValida: string | boolean;
  telefonoValido: string | boolean;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.nombreValido = false;
    this.apellidoValido = false;
    this.edadValida = false;
    this.telefonoValido = false;
    this.formulario = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      edad: ['', [Validators.required, Validators.min(18), Validators.max(99)]],
      telefono: [
        '',
        [
          Validators.required,
          Validators.maxLength(10),
          Validators.pattern('^[0-9]*$'),
        ],
      ],
    });
  }

  ngOnInit(): void {
    this.authService.getUserLogged().subscribe(async (user) => {
      if (!user) {
        this.router.navigate(['/login']);
      } else {
        this.userLogged = user;
      }
    });
  }

  enviarFormulario() {
    if (this.formulario.valid) {
      console.log(this.formulario.value);
    } else {
      this.mostrarMensajeValidacionNombre();
      this.mostrarMensajeValidacionApellido();
      this.mostrarMensajeValidacionEdad();
      this.mostrarMensajeValidacionTelefono();
      console.log(this.formulario.value);
    }
  }

  mostrarMensajeValidacionNombre() {
    this.nombreValido = this.formulario.value.nombre;
    if (this.nombreValido === '') {
      this.nombreValido = 'El nombre es requerido';
    } else {
      this.nombreValido = false;
    }
  }

  mostrarMensajeValidacionApellido() {
    this.apellidoValido = this.formulario.value.apellido;
    if (this.apellidoValido === '') {
      this.apellidoValido = 'El apellido es requerido';
    } else {
      this.apellidoValido = false;
    }
  }

  mostrarMensajeValidacionEdad() {
    const edad = this.formulario.value.edad;
    if (edad === '') {
      this.edadValida = 'La edad es requerida';
    } else if (edad < 18) {
      this.edadValida = 'La edad debe ser mayor a 18 años';
    } else if (edad > 99) {
      this.edadValida = 'La edad debe ser menor a 99 años';
    } else {
      this.edadValida = false;
    }
  }

  mostrarMensajeValidacionTelefono() {
    const telefono = this.formulario.value.telefono;
    if (telefono === '') {
      this.telefonoValido = 'El teléfono es requerido';
    } else if (isNaN(telefono)) {
      this.telefonoValido = 'Se deben ingresar solo números';
    } else if (telefono.length > 10) {
      this.telefonoValido = 'El teléfono debe tener 10 dígitos';
    } else {
      this.telefonoValido = false;
    }
  }


}
