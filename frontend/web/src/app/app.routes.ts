import { Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { StockListComponent } from './stock-list/stock-list.component';
import { StockDetailComponent } from './stock-detail/stock-detail.component';
import { MarketTrendsComponent } from './market-trends/market-trends.component';

export const routes: Routes = [
    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent },
    { path: 'user/:userID', component: UserDetailsComponent },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'stocks', component: StockListComponent },
    { path: 'stock/:id', component: StockDetailComponent },
    { path: 'trends', component: MarketTrendsComponent }
];

 export class AppRoutingModule { }