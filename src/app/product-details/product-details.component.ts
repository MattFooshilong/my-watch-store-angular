import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Product, products } from '../products'
import { CartService } from '../cart.service'
import { strapColor } from "../data.strapColor"
import { dialSize } from "../data.dialSize"

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) { }

  //watch state
  product: Product | undefined;
  productID: number | null = null
  itemCount: number = 0
  public chosenStrapColor: number | null = null

  //strap color dropdown
  public strapColorDropDownItems = strapColor
  public strapColordefaultItem = { text: 'Choose strap color', value: null }
  //dial size dropdown
  public dialSizeDropDownItems = dialSize
  public dialSizeDefaultItem = { text: 'Choose dial size', value: null }

  //confirmation modal
  public opened = false;
  public close(): void {
    this.opened = false;
  }
  public open(): void {
    this.opened = true;
  }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap
    this.productID = Number(routeParams.get('productId'))
    this.product = products.find(product => product.id === this.productID)
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product)
    window.alert('Your product has been added to the cart!')
    this.close()
  }

  public handleFilterChange(item: { text: string; value: number | null }): void {
    this.chosenStrapColor = item.value;
    console.log(this.chosenStrapColor)
  }

  addCount() {
    this.itemCount++
  }
  minusCount() {
    if (this.itemCount > 0) this.itemCount--
  }
}
