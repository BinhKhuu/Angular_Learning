import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InjectionComponent } from './injection/injection.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, InjectionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'xss_app';
}
