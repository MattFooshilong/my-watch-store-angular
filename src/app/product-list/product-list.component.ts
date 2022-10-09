import { Component } from '@angular/core'
import { Product, products } from '../products'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  constructor() { }

  products = products
  product: Product | undefined

}
