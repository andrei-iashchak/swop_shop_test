import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BannerComponent } from './banner/banner.component';
import { FeaturesComponent } from './features/features.component';
import { VideoBlockComponent } from './video-block/video-block.component';
import { TwitterComponent } from './twitter/twitter.component';
import { AdaptiveComponent } from './adaptive/adaptive.component';
import { FooterComponent } from './footer/footer.component';
import { CombinationComponent } from './combination/combination.component';
import { HeaderCombinationComponent } from './header-combination/header-combination.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    BannerComponent,
    FeaturesComponent,
    VideoBlockComponent,
    TwitterComponent,
    AdaptiveComponent,
    FooterComponent,
    CombinationComponent,
    HeaderCombinationComponent
  ],
  exports: [
    NavBarComponent,
    BannerComponent,
    FeaturesComponent,
    VideoBlockComponent,
    TwitterComponent,
    AdaptiveComponent,
    FooterComponent,
    CombinationComponent,
    HeaderCombinationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
