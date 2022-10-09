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
  //selected values
  quantity: number = 1
  public chosenStrapColor: string | null = null
  public chosenDialSize: string | null = null


  //strap color dropdown
  public strapColorDropDownItems = strapColor
  public strapColordefaultItem = { text: 'Choose strap color', value: null }
  //dial size dropdown
  public dialSizeDropDownItems = dialSize
  public dialSizeDefaultItem = { text: 'Choose dial size', value: null }

  //error message
  notChosen = false

  //confirmation modal
  public opened = false;
  public close(): void {
    this.opened = false;
  }
  public open(): void {
    if (!this.chosenStrapColor || !this.chosenDialSize)
      this.notChosen = true
    else {
      this.opened = true
      this.notChosen = false
    }
  }

  public testProducts: any = [];
  ngOnInit(): void {
    this.cartService.getProducts()
      .subscribe(res => {
        this.testProducts = res;
      })
    console.log(this.testProducts)
    const routeParams = this.route.snapshot.paramMap
    this.productID = Number(routeParams.get('productId'))
    this.product = products.find(product => product.id === this.productID)
  }

  addToCart(product: Product) {
    product.strapColor = this.chosenStrapColor
    product.dialSize = this.chosenDialSize
    product.quantity = this.quantity
    this.cartService.addToCart(product)
    this.close()
  }



  public handleChange(item: { text: string; value: string | null }, type: string): void {
    if (type === 'strap') this.chosenStrapColor = item.value;
    if (type === 'dialSize') this.chosenDialSize = item.value;
  }

  addCount() {
    this.quantity++
  }
  minusCount() {
    if (this.quantity > 1) this.quantity--
  }

}
