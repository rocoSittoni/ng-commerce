import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { MockedProductDataService } from 'src/app/services/mocked-data.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { SwiperComponent } from "swiper/angular";
import SwiperCore, { Navigation, Autoplay } from "swiper/core";
import { HttpService } from 'src/app/services/http.service';
import { Product } from 'src/app/interfaces/interfaces';

SwiperCore.use([
  Navigation,
  Autoplay,
]);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  public data: any;
  public products?: Array<Product>;
  
  constructor(
    private httpService: HttpService,
    private activatedRoute: ActivatedRoute, 
    private cd: ChangeDetectorRef,
    public mockedProductDataService: MockedProductDataService,
    private router: Router
    ) {
    this.data = mockedProductDataService.$mockedData;
  }

  ngOnInit(): void {
    // this.activatedRoute.params.subscribe((params: Params) => {
    //   if (params['product-search']) {
    //     this.searchProducts(params['product-search']);
    //   }
    // })
  }

  // searchProducts(sort: string, search?: string): void {
  //   this.httpService
  //     .getProductList(sort, search)
  //     .subscribe((productList: APIResponse<Product>) => {
  //       this.products = productList.results;
  //       console.log(productList);
  //     })
  // }

  @ViewChild("swiperRef", { static: false }) swiperRef?: SwiperComponent;
  
  onSwiper(swiper: any) {
    console.log(swiper);
  }
  onSlideChange() {
    console.log('slide change');
  }
  
  breakpoints = {
    300: { slidesPerView: 1, spaceBetween: 10 },
    640: { slidesPerView: 2, spaceBetween: 20 },
    768: { slidesPerView: 4, spaceBetween: 40 },
    1024:{ slidesPerView: 4, spaceBetween: 40 },
  };
  
  openPost(post: any){
    this.mockedProductDataService.$selectedProduct = post;
    console.log(this.mockedProductDataService.$selectedProduct);
    this.router.navigate(['/post/' + post.id]);
  }

}

