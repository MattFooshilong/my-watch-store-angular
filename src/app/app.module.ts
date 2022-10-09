import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule } from '@angular/router'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppComponent } from './app.component'
import { TopBarComponent } from './top-bar/top-bar.component'
import { ProductListComponent } from './product-list/product-list.component'
import { ProductDetailsComponent } from './product-details/product-details.component'
import { CartComponent } from './cart/cart.component'

import { HttpClientModule } from '@angular/common/http'
import { CheckoutComponent } from './checkout/checkout.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { DateInputsModule } from '@progress/kendo-angular-dateinputs'
import { DropDownsModule } from '@progress/kendo-angular-dropdowns'
import { LayoutModule } from '@progress/kendo-angular-layout'
import { ButtonsModule } from '@progress/kendo-angular-buttons'
import { DialogsModule } from '@progress/kendo-angular-dialog'
import { LabelModule } from '@progress/kendo-angular-label'
import { InputsModule } from '@progress/kendo-angular-inputs'
import { NotificationModule } from '@progress/kendo-angular-notification'


@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: ProductListComponent },
      { path: 'products/:productId', component: ProductDetailsComponent },
      { path: 'cart', component: CartComponent },
      { path: 'checkout', component: CheckoutComponent }

    ]),
    BrowserAnimationsModule,
    DateInputsModule,
    DropDownsModule,
    LayoutModule,
    ButtonsModule,
    DialogsModule,
    InputsModule,
    LabelModule,
    NotificationModule
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductDetailsComponent,
    CartComponent,
    CheckoutComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
