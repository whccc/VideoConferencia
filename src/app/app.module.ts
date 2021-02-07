import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { RoomComponent } from './pages/room/room.component';
import { VideoPlayerComponent } from './components/video-player/video-player.component';
import { SocketIoConfig, SocketIoModule } from 'ngx-socket-io';
import { ChatComponent } from './components/chat/chat.component';
import { HeaderComponent } from './components/header/header.component';

const config: SocketIoConfig = {
  url: 'https://clonezoomsocket.azurewebsites.net',
  options: { withCredentials: '*' },
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RoomComponent,
    VideoPlayerComponent,
    ChatComponent,
    HeaderComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, SocketIoModule.forRoot(config)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
