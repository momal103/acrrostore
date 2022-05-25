import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { AccueilComponent } from './accueil/accueil.component';
import { GarantieComponent } from './garantie/garantie.component';
import { ServiceClientComponent } from './service-client/service-client.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormInputTextComponent } from './form-input-text/form-input-text.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavComponent,
    JumbotronComponent,
    ArticleListComponent,
    AccueilComponent,
    GarantieComponent,
    ServiceClientComponent,
    FormInputTextComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [NavComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
