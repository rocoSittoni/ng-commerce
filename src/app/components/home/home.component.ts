import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { MockedProductDataService } from 'src/app/services/mocked-data.service';
import { Router } from '@angular/router';
import { SwiperComponent } from "swiper/angular";
import SwiperCore, { Navigation, Autoplay } from "swiper/core";

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
  
  ngOnInit(): void {
  }
  
  constructor( 
    private cd: ChangeDetectorRef,
    public mockedProductDataService: MockedProductDataService,
    private router: Router
    ) {
    this.data = mockedProductDataService.$mockedData;
  }

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
  
  // breakPointsToggle: boolean = false;
  // breakpointChange() {
  //   this.breakPointsToggle = !this.breakPointsToggle;
  //   this.breakpoints = {
  //     640: { slidesPerView: 2, spaceBetween: 20 },
  //     768: { slidesPerView: 4, spaceBetween: 40 },
  //     1024: { slidesPerView: this.breakPointsToggle ? 7 : 5, spaceBetween: 50 }
  //   };
  // }

}

