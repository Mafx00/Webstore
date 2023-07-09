import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Cart, CartItem } from '../models/cart.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart = new BehaviorSubject<Cart>({items: []});

  constructor(private _snackBar: MatSnackBar) { }

  addToCart(item: CartItem): void {
    const items = [...this.cart.value.items];

    const itemInCart = items.find((_items) => _items.id === item.id);
    if(itemInCart) {
      item .quantity += 1;
    } else {
      items.push(item);
    }

    this.cart.next({ items});
    this._snackBar.open('1 item added to the cart', 'OK', {duration: 3000});
    console.log(this.cart.value);
  }

  getTotal(items: Array<CartItem>): number {
    return items.
      map((item) => item.price * item.quantity)
      .reduce((prev, current) => prev + current, 0)
  }
  
}
