import { Component, ViewEncapsulation, OnInit } from '@angular/core'
import { CartService } from '../cart.service'
import { Validators, FormGroup, FormControl } from '@angular/forms'
import { Product } from '../products'

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  //items
  public items: Product[] = []
  ngOnInit(): void {
    this.cartService.getProducts()
      .subscribe(res => {
        this.items = res
      })
  }

  //form
  public form: FormGroup
  public data: any = {
    fullName: '',
    email: '',
    address: '',
    cardNumber: '',
    terms: false,
    comments: '',
  }

  constructor(
    private cartService: CartService
  ) {
    this.form = new FormGroup({
      fullName: new FormControl(this.data.fullName, [Validators.required]),
      email: new FormControl(this.data.email, [
        Validators.required,
        Validators.email,
      ]),
      address: new FormControl(this.data.address, [Validators.required]),
      cardNumber: new FormControl(this.data.cardNumber, [Validators.required]),
      terms: new FormControl(this.data.terms, [Validators.requiredTrue]),
      comments: new FormControl(this.data.comments),
    })
  }

  public submitForm(): void {
    this.form.markAllAsTouched()
  }

}
