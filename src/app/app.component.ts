import { UserFormComponent } from './user-form/user-form.component';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {LikeComponent} from './like/like.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,LikeComponent, UserFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'proyecto-24-07';
}
