import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { Stock } from '../stock.model';
import { ActivatedRoute } from '@angular/router';
import { StockService } from '../stock.service';
import { CommonModule } from '@angular/common';
import { Chart, registerables } from 'chart.js/auto';

@Component({
  selector: 'app-stock-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stock-detail.component.html',
  styleUrls: ['./stock-detail.component.css'] // Corrected 'styleUrl' to 'styleUrls'
})
export class StockDetailComponent implements AfterViewInit {
  @ViewChild('stockChart', { static: false }) stockChartRef!: ElementRef;

  stock?: Stock;

  constructor(private route: ActivatedRoute, private stockService: StockService) {
    Chart.register(...registerables);
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.stockService.getStockById(id).subscribe(stock => {
        this.stock = stock;
        console.log( this.stock.sparkline_in_7d)
        // Moving the chart creation to ngAfterViewInit to ensure DOM is ready
      });
    }
  }

  ngAfterViewInit(): void {
    if (this.stock && this.stock.sparkline_in_7d) {
      console.log("def")
      // Using setTimeout to ensure that Angular's change detection is complete
      setTimeout(() => {
        this.createChart(this.stock!.sparkline_in_7d.price);
      }, 0);
      console.log("hij")
      
    }
  }

  createChart(priceData: number[]): void {
    const ctx = this.stockChartRef.nativeElement.getContext('2d');
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: priceData.map((_, index) => index.toString()),
        datasets: [{
          label: 'Price',
          data: priceData,
          borderColor: 'rgba(75, 192, 192, 1)',
          fill: false,
        }]
      },
      options: {
        scales: {
          x: {
            title: {
              display: true,
              text: 'Time'
            }
          },
          y: {
            title: {
              display: true,
              text: 'Price (USD)'
            }
          }
        }
      }
    });
  }
}
