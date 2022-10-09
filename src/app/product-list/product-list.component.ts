import { Component } from '@angular/core'
import { Product, products } from '../products'
import { CartService } from '../cart.service'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  constructor(
    private cartService: CartService
  ) { }

  products = products
  product: Product | undefined


  onNotify() {
    window.alert('You will be notified when the product goes on sale')
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product)
    window.alert('Your product has been added to the cart!')
  }
}
