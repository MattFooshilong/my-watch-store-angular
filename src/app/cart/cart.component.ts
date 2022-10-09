import { Component, OnInit } from '@angular/core'
import { CartService } from '../cart.service'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public items: any = []
  ngOnInit(): void {
    this.cartService.getProducts()
      .subscribe(res => {
        this.items = res
      })
  }

  constructor(
    private cartService: CartService
  ) { }

  removeItem(item: any) {
    this.cartService.removeCartItem(item)
  }



}
