import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss']
})
export class ConfirmationComponent implements OnInit {
  @Input() taskNo: number | null = null;
  @Output() eventEmitter = new EventEmitter<boolean>( );

  constructor() {
  }

  ngOnInit(): void {
  }

  agree(): void {
    this.eventEmitter.emit(true);
    this.taskNo = null;
  }
  disagree(): void{
    this.eventEmitter.emit(false);
    this.taskNo = null;
  }


}
