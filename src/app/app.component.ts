import { Component } from '@angular/core';
import { UserserviceService } from './userservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[UserserviceService]
})
export class AppComponent {
  title = 'app';
}
