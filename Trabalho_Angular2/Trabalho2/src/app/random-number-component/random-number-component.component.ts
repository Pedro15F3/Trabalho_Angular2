import { Component } from '@angular/core';
import { DataServiceService } from '../service/data-service.service';

@Component({
  selector: 'app-random-number-component',
  templateUrl: './random-number-component.component.html',
  styleUrls: ['./random-number-component.component.css']
})
export class RandomNumberComponentComponent {
  public isSendMessage: boolean = false;

  constructor(private dataService: DataServiceService) {}

  sendMessage() {
    this.dataService.getAleatorio();
    console.log(this.dataService.getResultado());
  }

}
