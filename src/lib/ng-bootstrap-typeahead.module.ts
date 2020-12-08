import { NgModule } from '@angular/core';
import { NgBootstrapTypeaheadComponent } from './controls/basic/ng-bootstrap-typeahead.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxFormModule } from '@ngxform/platform';
import { CommonModule } from '@angular/common';
import { NgBootstrapTypeaheadExtendComponent } from './controls/extend/extend.component';
import { NgbHighlight } from './typeahead/highlight';
import { NgbTypeaheadModule } from './typeahead/typeahead.module';
import { NgbTypeaheadConfig } from './typeahead/typeahead-config';
import { Live } from './util/accessibility/live';

@NgModule({
  declarations: [NgBootstrapTypeaheadComponent, NgBootstrapTypeaheadExtendComponent],
  imports: [NgbTypeaheadModule, CommonModule, FormsModule, ReactiveFormsModule, NgxFormModule],
  exports: [NgbHighlight],
  providers: [NgbTypeaheadConfig, Live],
  entryComponents: [NgBootstrapTypeaheadComponent, NgBootstrapTypeaheadExtendComponent]
})
export class NgxFormTypeaheadModule {}
