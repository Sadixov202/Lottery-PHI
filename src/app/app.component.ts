import { Component, OnInit } from '@angular/core';
import { AppService } from './services/app/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  title = 'PI-loterea';
  player: any;
  winners: any;
  selectedProduct: any;
  isLoading: boolean = false;

  constructor(private appService: AppService) {

  }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.appService.getPlayer({limit: 30}).subscribe((res) => {
      this.player = res?.items;
    });
  }

  onSelectProduct(productId: number) {
    const product = this.player.find((item: any) => item.id === productId);
    if (product && !product.isCompleted) {
      this.selectedProduct = product;
      this.selectedProduct.isCompleted = true;
    }
  }

  selecetProduct(productId: number) {
    // Проверяем, выбран ли продукт
    if (!this.selectedProduct) {
      return;
    }

    // Проверяем, не идет ли уже загрузка
    if (this.isLoading) {
      return;
    }

    // Очищаем предыдущих победителей
    this.winners = null;
    
    // Включаем индикатор загрузки
    this.isLoading = true;

    // Запускаем таймер на 2 секунды
    setTimeout(() => {
      this.appService.onPlay({productId: productId}).subscribe({
        next: (res) => {
          this.winners = res?.items;
          this.isLoading = false;
        },
        error: (err) => {
          console.error('Ошибка при получении победителей:', err);
          this.isLoading = false;
        }
      });
    }, 2000);
  }

}
