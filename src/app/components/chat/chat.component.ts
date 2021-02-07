import { Component, OnInit } from '@angular/core';
import { WebSocketService } from '../../web-socket.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {
  roomName: string;
  messajes: Array<any> = [];
  constructor(
    private webSocketService: WebSocketService,
    private route: ActivatedRoute
  ) {
    this.roomName = route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.initSocket();
  }
  SendMessage = (nombre, mensaje) => {
    this.webSocketService.sendMessage({
      nombre,
      mensaje,
    });
  };
  initSocket = () => {
    this.webSocketService.cbEvent.subscribe((res) => {
      if (res.name === 'Messaje') {
        this.AddMensajes(res.data);
      }
    });
  };
  AddMensajes = (Data) => {
    this.messajes.push(Data);
  };
}
