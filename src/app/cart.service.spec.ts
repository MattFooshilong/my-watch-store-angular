import { TestBed } from '@angular/core/testing'

import { CartService } from './cart.service'

describe('CartService', () => {
  let service: CartService

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(CartService)
  })

  it('Test initializing, watch array should be empty', () => {
    let items: any = []

    service.getProducts()
      .subscribe(res => {
        items = res
      })
    expect(items.length).toBe(0)
  })
  it('Test add to cart service', () => {
    let items: any = []

    service.addToCart({
      id: 0,
      name: 'Apple Watch 8',
      price: 1399,
      description: 'A smart watch with one of the best screens'
    })
    service.getProducts()
      .subscribe(res => {
        items = res
      })
    console.log(items)
    expect(items.length).toBe(1)
  })

})
