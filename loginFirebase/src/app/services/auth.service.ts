import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private angularFireAuth: AngularFireAuth) {}

  async register(email: string, password: string) {
    try {
      return await this.angularFireAuth.createUserWithEmailAndPassword(
        email,
        password
      );
    } catch (error) {
      console.error('Error en creacion de usuario: ', error);
      return null;
    }
  }

  async login(email: string, password: string) {
    try {
      return await this.angularFireAuth.signInWithEmailAndPassword(
        email,
        password
      );
    } catch (error) {
      console.error('Error en login: ', error);
      return null;
    }
  }

  async loginWithGoogle(email: string, password: string) {
    try {
      return await this.angularFireAuth.signInWithPopup(
        new firebase.auth.GoogleAuthProvider()
      );
    } catch (error) {
      console.error('Error en login con Google: ', error);
      return null;
    }
  }

  getUserLogged() {
    return this.angularFireAuth.authState;
  }

  logout() {
    this.angularFireAuth.signOut();
  }
}
