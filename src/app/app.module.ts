import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { Page1child1Component } from './page1/page1child1/page1child1.component';
import { Page1child2Component } from './page1/page1child2/page1child2.component';
import { SpectrumDefragModule } from './view/spectrum-defrag/spectrum-defrag.module';
import { NetworkCreationModule } from './view/network-creation/network-creation.module';
import { OpticalProvisionerModule } from './view/optical-provisioner/optical-provisioner.module';

@NgModule({
    declarations: [
        AppComponent,
        Page1Component,
        Page2Component,
        Page1child1Component,
        Page1child2Component,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        SpectrumDefragModule,
        NetworkCreationModule,
        OpticalProvisionerModule
    ]
})
export class AppModule { }
