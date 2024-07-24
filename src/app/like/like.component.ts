import { Component, Directive } from '@angular/core';

@Component({
  selector: 'app-like',
  standalone: true,
  template: `<h1>hello work</h1>
  <div class="container">
  <img src="assets/descarga.jpg" alt="">
  </div>`,
  styles: `.container{
    max-width: 500px; 
    margin: 0 auto;
    background-color: black;
  }`
})
export class LikeComponent {

}
