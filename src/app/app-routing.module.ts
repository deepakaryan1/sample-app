import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page1Component } from './page1/page1.component';
import { Page1child1Component } from './page1/page1child1/page1child1.component';
import { Page1child2Component } from './page1/page1child2/page1child2.component';
import { Page2Component } from './page2/page2.component';
import { ConfigViewComponent } from './view/spectrum-defrag/spectrum-defrag/config-view/config-view.component';
import { DeployViewComponent } from './view/spectrum-defrag/spectrum-defrag/deploy-view/deploy-view.component';
import { OptimizationViewComponent } from './view/spectrum-defrag/spectrum-defrag/optimization-view/optimization-view.component';
import { SpectrumDefragComponent } from './view/spectrum-defrag/spectrum-defrag/spectrum-defrag.component';
import { SpectrumViewComponent } from './view/spectrum-defrag/spectrum-defrag/spectrum-view/spectrum-view.component';

const routes: Routes = [
  {
    path:'page1',
    component:Page1Component,
    children: [
      {
        path: "child1",
        component: Page1child1Component,
      },
       {
        path: "child2",
        component: Page1child2Component,
      }
    ]
  },
  {
    path:'defragApp',
    component:SpectrumDefragComponent,
    children:[
      {
        path:'spectrumview',
        component:SpectrumViewComponent
      },
      {
        path:'optimizationview',
        component:OptimizationViewComponent
      },
      {
        path:'configview',
        component:ConfigViewComponent
      },
      {
        path:'deployview',
        component:DeployViewComponent
      },
      { path: '',   redirectTo: '/defragApp/spectrumview', pathMatch: 'full' }
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
