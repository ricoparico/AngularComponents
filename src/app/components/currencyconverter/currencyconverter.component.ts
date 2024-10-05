import { Component } from '@angular/core';

@Component({
  selector: 'app-currencyconverter',
  templateUrl: './currencyconverter.component.html',
  styleUrl: './currencyconverter.component.css'
})
export class CurrencyconverterComponent {
  dollars: number = 0;
  pesos: number | null = null;
  conversionRate: number = 56; // 1 dollar = 56 Php

  convertCurrency(): void {
    this.pesos = this.dollars * this.conversionRate;
  }
}
