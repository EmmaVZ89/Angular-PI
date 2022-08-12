import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ChatServiceService } from 'src/app/services/chat-service.service';
import * as moment from 'moment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
})
export class ChatComponent implements OnInit {
  userLogged: any;
  nuevoMensaje: string = '';
  listaDeMensajes: any = [];

  constructor(
    private authService: AuthService,
    private chatService: ChatServiceService,
    private router: Router
  ) {
    this.chatService.getMessages().subscribe((messages) => {
      if (messages !== null) {
        this.listaDeMensajes = messages;
      }
    });
  }

  ngOnInit(): void {
    this.authService.getUserLogged().subscribe((user) => {
      if(!user) {
        this.router.navigate(['/login']);
      } else {
        this.userLogged = user;
      }
    });
  }

  enviarMensaje() {
    if (this.nuevoMensaje == '') return;
    const fecha = moment(new Date()).format('DD-MM-YYYY HH:mm:ss');
    const mensaje = {
      usuario: {
        id: this.userLogged.uid,
        email: this.userLogged.email,
      },
      texto: this.nuevoMensaje,
      fecha: fecha,
    };
    // this.listaDeMensajes.push(mensaje);
    this.chatService.createMessage(mensaje);
    this.nuevoMensaje = '';
    // this.scrollToTheLastElementByClassName();
  }

  // scrollToTheLastElementByClassName() {
  //   const elements = document.getElementsByClassName('mensajes');
  //   const lastElement: any = elements[elements.length - 1];
  //   const toppos = lastElement.offsetTop;
  //   //@ts-ignore
  //   document.getElementById("contenedor-mensajes")?.scrollTop = toppos;
  // }
}
