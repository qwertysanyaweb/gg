import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  NbThemeModule,
  NbInputModule,
  NbButtonModule,
  NbMenuModule,
  NbUserModule,
  NbIconModule,
  NbCardModule, NbSelectModule, NbFormFieldModule, NbSidebarModule, NbLayoutModule,
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { FormFieldPasswordComponent } from './components/nebular/formfieldpassword/formfieldpassword.component';
import {HttpClientModule} from "@angular/common/http";
import { HeaderComponent } from './layout/header/header.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';

// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    FormFieldPasswordComponent,
    HeaderComponent,
    SidebarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbSidebarModule,
    NbEvaIconsModule,
    NbInputModule,
    NbButtonModule,
    NbMenuModule,
    NbUserModule,
    NbIconModule,
    NbCardModule,
    NbSelectModule,
    NbFormFieldModule,
    HttpClientModule,
    NbSidebarModule.forRoot(),
    NbLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
