import { Injectable } from '@angular/core';
import { Product } from './products'
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})


export class CartService {
  items: Product[] = []
  constructor(
    private http: HttpClient
  ) { }

  addToCart(product: Product) {
    const copy = { ...product }
    this.items.push(copy)
    localStorage.setItem('data', JSON.stringify(this.items))
  }

  getItems() {
    const data = localStorage.getItem('data')
    const arr = data ? JSON.parse(data) : []
    return arr
  }
  getItemsFromService() {
    return this.items
  }
  clearCart() {
    this.items = []
    localStorage.clear()
    return this.items
  }

  getShippingPrices() {
    return this.http.get<{ type: string, price: number }[]>('/assets/shipping.json')
  }
}
