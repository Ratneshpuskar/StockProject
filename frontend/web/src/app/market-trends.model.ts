import { Stock } from './stock.model';

export interface MarketTrends {
    coins: { item: Stock }[];
    // Add NFTs if needed in the future
}
