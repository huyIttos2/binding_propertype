import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'message-info ',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent {
  @Input() public message: string = '';
  @Input('alert-pop') public message1: string = '';
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onSignup  = new EventEmitter<any>();
  public data: any = {};

  public showAlert(): void {
    alert(this.message1);
  }
  public onSubmit(): void {
    this.onSignup.emit(this.data);
  }

}
