import { NgModule } from "@angular/core";
import { HeaderComponent } from './header/header.component';
import { SitebarComponent } from './sitebar/sitebar.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        RouterModule,
        CommonModule
    ],
    declarations: [
        HeaderComponent,
        SitebarComponent,
        NopagefoundComponent,
        BreadcrumbsComponent
    ],
    exports: [
        HeaderComponent,
        SitebarComponent,
        NopagefoundComponent,
        BreadcrumbsComponent
    ]
})
export class SharedModule { }
