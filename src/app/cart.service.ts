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
    let arr = [...this.items]
    arr.push(product)
    this.items = [...arr]
    console.log(this.items)
    localStorage.setItem('data', JSON.stringify(arr))
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

interface CartItems {
  id: number;
  name: string;
  price: number;
  description: string;
  strapColor: string;
  dialSize: string;
  quantity: number;
}