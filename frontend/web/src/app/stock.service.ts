import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Stock } from './stock.model';
import { MarketTrends } from './market-trends.model';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  private apiUrl = 'http://localhost:8090/stock';

  constructor(private http: HttpClient) { }

  getAllStocks(): Observable<Stock[]> {
      return this.http.get<Stock[]>(`${this.apiUrl}/all`);
  }

  getStockById(id: string): Observable<Stock> {
      return this.http.get<Stock>(`${this.apiUrl}/${id}`);
  }

  getMarketTrends(): Observable<MarketTrends> {
      return this.http.get<MarketTrends>(`${this.apiUrl}/trending`);
  }

  getStocksByIds(ids: string[]): Observable<Stock[]> {
      const commaSeparatedIds = ids.join(',');
      return this.http.get<Stock[]>(`${this.apiUrl}/getAll/${commaSeparatedIds}`);
  }
}