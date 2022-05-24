import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AppComponent } from './app.component';
import { ArticleComponent } from './components/article.component';
import { LoginComponent } from './components/login.component';
import { reducers } from './reducers/reducers';
import { ArticleEffects } from './effects/article.effects';
import { ArticleService } from './services/article.service';
import { LoginEffects } from './effects/login.effects';
import { LoginService } from './services/login.sevice';
import { WeatherEffects } from './effects/weather.effect';
import { WeatherService } from './services/weather.sevice';
import{postService} from './services/postService'
import{OldComponent} from './components/old.component'
import { JsonpInterceptingModule } from './httpInterceptor';
import {CdkAccordionModule} from '@angular/cdk/accordion';
import {MatExpansionModule} from '@angular/material/expansion';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {CityComponent} from './components/city.component';
import{MatSelectModule} from '@angular/material/select'
import{AppRoutingModule} from'./app-routing.module'
// import {MatTableModule} from '@angular/material/table';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule,
        MatFormFieldModule,
        JsonpInterceptingModule,
        Ng2SmartTableModule,
        MatSelectModule,
        BrowserAnimationsModule,
        CdkAccordionModule,
        MatExpansionModule,
        AppRoutingModule,
             StoreModule.forRoot(reducers),
        EffectsModule.forRoot([ArticleEffects,LoginEffects,WeatherEffects])
    ],
    declarations: [
        AppComponent,
        ArticleComponent,
        LoginComponent,OldComponent,CityComponent
    ],
    providers: [
        ArticleService,LoginService,postService,WeatherService

       
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
