import { Component } from '@angular/core';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css'
})
export class UserFormComponent {
  inputMensage = "ingresa tu nombre"
  disableButton = false


  

  clickSaveData():void {
    alert("guardando datos...")
  }


}