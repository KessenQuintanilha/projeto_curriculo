import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    FontAwesomeModule
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('projeto_curriculo');
}
