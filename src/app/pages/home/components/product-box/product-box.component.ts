import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-box',
  templateUrl: './product-box.component.html'
})
export class ProductBoxComponent implements OnInit{
  @Input() fullWidthMode = false;
  product: Product | undefined = {
    id: 1,
    title: 'Snickers',
    price: 150,
    category: 'shoes',
    description: 'Description',
    image: 'https://via.placeholder.com/150',
  };

  @Output() addToCart = new EventEmitter();
  

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onAddToCart(): void {
    this.addToCart.emit(this.product);

  }
    

}
