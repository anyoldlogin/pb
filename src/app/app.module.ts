import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';

import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HomeComponent }  from './home/home.component';
import { AboutComponent }    from './about/about.component';
import { ArticleComponent }    from './article/article.component';
import { ArticleModule }    from './article/article.module';

export const firebaseConfig = {
  apiKey: "AIzaSyCWeCImPN9_oQlXQr1B3C2tez8lgYCF4Y8",
  authDomain: "photoblog-f46ab.firebaseapp.com",
  databaseURL: "https://photoblog-f46ab.firebaseio.com",
  storageBucket: "photoblog-f46ab.appspot.com",
  messagingSenderId: "462944417279"
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    AppRoutingModule,
    ArticleModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
