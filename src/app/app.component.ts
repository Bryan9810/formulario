import { Component } from '@angular/core';

declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'formulario';
  first_name:any = '';
  last_name:any = '';
  company:any = '';
  mail:any = '';

  mysend() {
    let objeto: any = []
    objeto.nombre = this.first_name
    objeto.apellido = this.last_name
    objeto.empresa = this.company
    objeto.correo = this.mail
    console.log(objeto);
    $('form').trigger("reset")
  }

  myvalidform (){
    let name = $('#first_name').val()
    let name1 = $('#last_name').val()
    let company = $('#company').val()
    let email = $('#mail').val()

    if (name == " " || name1 == " " || company == " " || email == " " || email.indexOf('@', 0) == -1 || email.indexOf('.', 0) == -1) {
      return true;
    }else{
      return false;
    }

  }

}
