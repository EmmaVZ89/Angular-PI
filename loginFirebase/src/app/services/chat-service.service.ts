import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export class ChatServiceService {
  constructor(private angularFirestore: AngularFirestore) {}

  getMessages() {
    const collection = this.angularFirestore.collection<any>('chats', (ref) =>
      ref.orderBy('fecha', 'asc').limit(25)
    );
    return collection.valueChanges();
  }

  createMessage(message:any) {
    this.angularFirestore.collection<any>("chats").add(message);
  }
}
