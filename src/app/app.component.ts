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
    this.selectedProduct = this.player.find((item: any) => item.id === productId);
    this.selectedProduct.isCompleted = true;
  }

  selecetProduct(productId: number) {
    this.isLoading = true;
    setTimeout(() => {
      this.appService.onPlay({productId: productId}).subscribe((res) => {
        this.winners = res?.items;
        this.isLoading = false;
      });
    }, 2000);
  }

}
