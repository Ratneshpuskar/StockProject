import { Component, OnInit } from '@angular/core';
import { MarketTrends } from '../market-trends.model';
import { StockService } from '../stock.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-market-trends',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './market-trends.component.html',
  styleUrl: './market-trends.component.css'
})
export class MarketTrendsComponent implements OnInit {

  marketTrends?: MarketTrends;

  constructor(private stockService: StockService) { }

  ngOnInit(): void {
      this.stockService.getMarketTrends().subscribe(data => {
          this.marketTrends = data;
      });
  }
}