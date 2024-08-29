import { Component, OnInit } from '@angular/core';
import { StockService } from '../stock.service';
import { Stock } from '../stock.model';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stock-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stock-list.component.html',
  styleUrl: './stock-list.component.css'
})
export class StockListComponent implements OnInit {

  stocks: Stock[] = [];

  constructor(private stockService: StockService, private router : Router) { }

  ngOnInit(): void {
      this.stockService.getAllStocks().subscribe(data => {
          this.stocks = data;
      });
  }

  viewStockDetails(id: string): void {
    this.router.navigate(['/stock', id]);
  }
}
