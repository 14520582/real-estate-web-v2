import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import 'hammerjs';
import { layoutConfig } from './layout-config';
import { AppComponent } from './app.component';
import { TranslateModule } from '@ngx-translate/core';
import { MainModule } from './layouts/main.module';
import { AppStoreModule } from './ngrx-store/store.module';
import {UiCoreModule} from './ui-core/ui.core.module';
import {SharedModule} from './ui-core/shared.module';


const appRoutes: Routes = [
  {
    path: 'home',
    loadChildren: './components/home/home.module#HomeModule'
  },
  {
    path: 'login',
    loadChildren: './components/login/login.module#LoginModule'
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports     : [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        RouterModule.forRoot(appRoutes),
        TranslateModule.forRoot(),
        UiCoreModule.forRoot(layoutConfig),
        SharedModule,
        AppStoreModule,
        MainModule
    ],
    bootstrap   : [
        AppComponent
    ]
})
export class AppModule
{
}
