import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CrossroadComponent } from './crossroad/crossroad.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CrossroadComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'traffic-light-homework';
}
