import { Component } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
// import { AppRoutingModule } from './app.routes';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { RegisterComponent } from './register/register.component';
import { StockDetailComponent } from './stock-detail/stock-detail.component';
import { StockListComponent } from './stock-list/stock-list.component';
import { MarketTrendsComponent } from './market-trends/market-trends.component';
import { DashboardComponent } from './dashboard/dashboard.component';
// import { StockService } from './stock.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule, LoginComponent, UserDetailsComponent, RegisterComponent
           , StockDetailComponent, StockListComponent, MarketTrendsComponent, DashboardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'web';
}
