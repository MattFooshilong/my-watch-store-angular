import { Component, OnInit } from '@angular/core'
import { CartService } from '../cart.service'
import { Product } from '../products'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public items: Product[] = []
  ngOnInit(): void {
    this.cartService.getProducts()
      .subscribe(res => {
        this.items = res
      })
  }

  constructor(
    private cartService: CartService
  ) { }

  removeItem(item: Product) {
    this.cartService.removeCartItem(item)
  }



}
