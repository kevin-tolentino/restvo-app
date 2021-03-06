import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FeatureCurriculumPageRoutingModule } from './feature-curriculum-routing.module';

import { FeatureCurriculumPage } from './feature-curriculum.page';
import {ApplicationPipesModule} from "../../../../pipes/application-pipes";
import {AutosizeModule} from "ngx-autosize";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApplicationPipesModule,
    AutosizeModule,
    FeatureCurriculumPageRoutingModule
  ],
  declarations: [FeatureCurriculumPage]
})
export class FeatureCurriculumPageModule {}
