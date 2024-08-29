import { Component, OnInit } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
//import { MatTableDataSource } from '@angular/material/table';

@Component({
  standalone: true,
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  imports: [MatProgressSpinnerModule, MatTableModule, MatIconModule, CommonModule],
})
export class DashboardComponent implements OnInit {
  trendingData: any[] = [];
  marketData: any[] = [];
  portfolioData: any[] = [];
  userDetails: any;
  loading = false;
  displayedColumns: string[] = ['rank', 'name', 'price', 'change24h', 'change7d'];

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.loading = true;

    // Fetch trending data
    this.http.get('https://api.coingecko.com/api/v3/search/trending').subscribe((response: any) => {
      this.trendingData = response.coins.map((d: any) => d.item);
    });

    // Fetch market data
    const marketUrl = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=true&price_change_percentage=24h,7d';
    this.http.get(marketUrl).subscribe((response: any) => {
      this.marketData = response.slice(0, 10);
    });

    // Fetch user details
    const userId = sessionStorage.getItem('userId')!;
    this.http.get(`http://localhost:9003/users/${userId}`).subscribe((response: any) => {
      this.userDetails = response;
    });

    // Fetch portfolio data
    this.http.get('http://localhost:9001/portfolio/getPortfolioData', { params: { userId } }).subscribe((response: any) => {
      this.portfolioData = response;
    });


    this.loading = false;
  }

  numberWithCommas(number: number): string {
    const parts = number.toString().split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return parts.join('.');
  }

  handleRowClick(row: any): void {
    this.router.navigate([`/market/stock/${row.id}`], { state: row });
  }



  formatPercentage(value: number): string {
    return Math.abs(value).toFixed(2);
  }
}
