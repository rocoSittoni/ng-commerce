import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
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

  ngOnInit(): void {
  }

  onSwiper(swiper: any) {
    console.log(swiper);
  }
  onSlideChange() {
    console.log('slide change');
  }

  @ViewChild("swiperRef", { static: false }) swiperRef?: SwiperComponent;

  constructor(private cd: ChangeDetectorRef) {}

  breakpoints = {
    640: { slidesPerView: 2, spaceBetween: 20 },
    768: { slidesPerView: 4, spaceBetween: 40 },
    1024: { slidesPerView: 4, spaceBetween: 50 }
  };

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
