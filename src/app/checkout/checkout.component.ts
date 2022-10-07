import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) { }

  items = this.cartService.getItems();

  checkoutForm = this.formBuilder.group({
    name: '',
    address: ''
  })

  onSubmit(): void {
    this.items = this.cartService.clearCart()
    console.warn('Your order has been submitted', this.checkoutForm.value)
    this.checkoutForm.reset()
  }
}
