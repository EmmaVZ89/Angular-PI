import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
})
export class ChatComponent implements OnInit {
  userLogged: any;
  nuevoMensaje: string = '';
  listaDeMensajes: any = [
    {
      emisor: 'id',
      texto: 'Hola mundo. Todo bien?sdf sdf sdf sdfads sdafasdf asdf asdf',
    },
    {
      emisor: 'id',
      texto: 'Hola 2',
    },
    {
      emisor: 'Bi1Ivf6EMtNADeeCFDczF9P9zXp1',
      texto: 'Hola 3',
    },
    {
      emisor: 'Bi1Ivf6EMtNADeeCFDczF9P9zXp1',
      texto: 'Hola 4',
    },
    {
      emisor: 'id',
      texto: 'Hola 5',
    },
    {
      emisor: 'Bi1Ivf6EMtNADeeCFDczF9P9zXp1',
      texto: 'Hola 6',
    },
  ];

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.getUserLogged().subscribe((user) => {
      this.userLogged = user;
    });
  }

  enviarMensaje() {
    const mensaje = {
      emisor: this.userLogged.uid,
      texto: this.nuevoMensaje,
    };
    this.listaDeMensajes.push(mensaje);
    this.nuevoMensaje = '';
  }
}
