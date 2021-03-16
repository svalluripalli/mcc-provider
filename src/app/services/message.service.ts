import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class MessageService {
  messages: string[] = [];

  add(message: string) {
    console.log2('MessageService: ' + message);
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }
}


