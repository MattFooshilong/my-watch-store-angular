import { Component, OnInit } from '@angular/core'
import { CartService } from '../cart.service'
import { Product } from '../products'

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  //items
  public items: Product[] = []
  ngOnInit(): void {
    this.cartService.getProducts()
      .subscribe(res => {
        this.items = res
      })
  }

  constructor(private cartService: CartService) { }




}
