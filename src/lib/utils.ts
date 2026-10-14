import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Prices are stored in BRL in the data; the app displays them in US dollars
// at a fixed rate of 1 USD = 6.00 BRL.
export const BRL_PER_USD = 6;

export function formatUSD(brl: number | string): string {
  const x = Number(brl) / BRL_PER_USD;
  if (x >= 1000) return `$${Math.round(x).toLocaleString("en-US")}`;
  if (x >= 10) return `$${Math.round(x)}`;
  return `$${x.toFixed(2)}`;
}

export function formatPrice(price: number): string {
  return formatUSD(price);
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('en-US', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  }).format(date)
}

export function formatTime(date: Date): string {
  return new Intl.DateTimeFormat('en-US', {
    hour: '2-digit',
    minute: '2-digit',
  }).format(date)
}
