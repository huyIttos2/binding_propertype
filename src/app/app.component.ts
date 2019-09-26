import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo-two-way-binding';
  public val: string = "This is alert popup message";
  public onSignup(data: any): void {
    let strMessage: string = "Thanks for Signup " + data.name + ". ";
    strMessage += "Email id " + data.email + " has been registered successfully.";
    alert(strMessage);
  }
}
