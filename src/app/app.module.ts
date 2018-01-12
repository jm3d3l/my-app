import { RestService } from './rest.service';
import { ApprouteModule } from './approute.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule} from '@angular/flex-layout';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { AccessoriesComponent } from './accessories/accessories.component';
import { SparepartsComponent } from './spareparts/spareparts.component';
import { BodypartsComponent } from './bodyparts/bodyparts.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductsComponent } from './products/products.component';




@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    AccessoriesComponent,
    SparepartsComponent,
    BodypartsComponent,
    ProductsComponent,
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FlexLayoutModule,
    MaterialModule,
    BrowserAnimationsModule,
    ApprouteModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [RestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
