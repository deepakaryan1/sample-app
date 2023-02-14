import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router';
import { SpectrumDefragComponent } from './spectrum-defrag/spectrum-defrag.component';
import { TabsComponent } from './spectrum-defrag/tabs/tabs.component';
import { SpectrumViewComponent } from './spectrum-defrag/spectrum-view/spectrum-view.component';
import { OptimizationViewComponent } from './spectrum-defrag/optimization-view/optimization-view.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { ConfigViewComponent } from './spectrum-defrag/config-view/config-view.component';
import { DeployViewComponent } from './spectrum-defrag/deploy-view/deploy-view.component';



@NgModule({
  declarations: [
    SpectrumDefragComponent,
    TabsComponent,
    SpectrumViewComponent,
    OptimizationViewComponent,
    ConfigViewComponent,
    DeployViewComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
    ],
    exports:[SpectrumDefragComponent]
})
export class SpectrumDefragModule { }
