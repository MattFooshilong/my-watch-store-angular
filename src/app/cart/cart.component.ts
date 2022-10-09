import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs'
import { CounterState } from '../state/counter.state'
import { getCounter } from '../state/counter.selector'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  //counter: CounterState
  items = this.cartService.getItems();

  constructor(
    private cartService: CartService,
    //private store: Store<{ counter: CounterState }>
  ) { }

  ngOnInit(): void {
    // this.store.select(getCounter).subscribe(counter => {
    //   this.counter = counter
    // })

  }



}
