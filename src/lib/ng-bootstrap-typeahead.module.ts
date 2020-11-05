import { NgModule } from '@angular/core';
import { NgBootstrapTypeaheadComponent } from './controls/basic/ng-bootstrap-typeahead.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxFormModule } from '@ngxform/platform';
import { CommonModule } from '@angular/common';
import { NgBootstrapTypeaheadExtendComponent } from './controls/extend/extend.component';
import { NgbHighlight } from './typeahead/highlight';
import { NgbTypeaheadModule } from './typeahead/typeahead.module';

@NgModule({
  declarations: [NgBootstrapTypeaheadComponent, NgBootstrapTypeaheadExtendComponent],
  imports: [NgbTypeaheadModule, CommonModule, FormsModule, ReactiveFormsModule, NgxFormModule],
  exports: [NgbHighlight],
  entryComponents: [NgBootstrapTypeaheadComponent, NgBootstrapTypeaheadExtendComponent]
})
export class NgxFormTypeaheadModule {}
