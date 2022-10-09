import { Injectable } from '@angular/core'
import { Product } from './products'
import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})

export class CartService {
  constructor() { }

  public cartItemList: any = []
  public productList = new BehaviorSubject<any>([])

  getProducts() {
    return this.productList.asObservable()
  }
  addToCart(product: Product) {
    const copy = { ...product }
    copy.cartItemID = copy.name + (Math.random() * 1000000).toString()
    this.cartItemList.push(copy)
    this.productList.next(this.cartItemList)
    console.log(this.cartItemList)
  }
  removeCartItem(product: Product) {
    const temp = this.cartItemList.filter((ele: Product) => ele.cartItemID !== product.cartItemID)
    this.cartItemList = [...temp]
    this.productList.next(this.cartItemList)
  }

}
