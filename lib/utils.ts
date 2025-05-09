import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Format a price as currency
 */
export function formatPrice(price: number): string {
  return new Intl.NumberFormat('en-US', { 
    style: 'currency', 
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2 
  }).format(price)
}

/**
 * Calculate savings between two prices
 */
export function calculateSavings(originalPrice: number, salePrice: number): number {
  return originalPrice - salePrice
}

/**
 * Calculate percentage discount
 */
export function calculateDiscountPercentage(originalPrice: number, salePrice: number): number {
  return Math.round(((originalPrice - salePrice) / originalPrice) * 100)
}
