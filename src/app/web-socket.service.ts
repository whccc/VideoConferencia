import { EventEmitter, Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root',
})
export class WebSocketService {
  events = ['new-user', 'bye-user', 'Messaje'];
  cbEvent: EventEmitter<any> = new EventEmitter<any>();

  constructor(private socket: Socket) {
    this.listener();
  }

  listener = () => {
    this.events.forEach((evenName) => {
      this.socket.on(evenName, (data) => {
        this.cbEvent.emit({
          name: evenName,
          data,
        });
      });
    });
  };

  joinRoom = (data) => {
    this.socket.emit('join', data);
  };
  sendMessage = (data) => {
    this.socket.emit('Message', data);
  };
}
