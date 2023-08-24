import { Component } from '@angular/core';
import { DataServiceService } from '../service/data-service.service';

@Component({
  selector: 'app-number-display-component',
  templateUrl: './number-display-component.component.html',
  styleUrls: ['./number-display-component.component.css']
})
export class NumberDisplayComponentComponent {
  public Aleatorio: number[] = [];

  constructor(private dataService: DataServiceService) {}

  ngOnInit() {
    this.criarnum();
  }
  
  criarnum() {
    this.dataService.getAleatorio();
    this.Aleatorio = this.dataService.getResultado();
    console.log(this.Aleatorio);
  }

}
