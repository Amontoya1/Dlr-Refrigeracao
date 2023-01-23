import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatBadgeModule } from '@angular/material/badge';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDialogModule } from '@angular/material/dialog';
import { MatChipsModule } from '@angular/material/chips';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatProgressBarModule} from '@angular/material/progress-bar';

const components = [
  MatInputModule,
  MatButtonModule,
  MatCheckboxModule,
  MatSidenavModule,
  MatSortModule,
  MatTableModule,
  MatRadioModule,
  MatSortModule,
  MatRadioModule,
  MatExpansionModule,
  MatRadioModule,
  MatInputModule,
  MatSnackBarModule,
  MatProgressSpinnerModule,
  MatBottomSheetModule,
  MatBadgeModule,
  MatGridListModule,
  MatDialogModule,
  MatSelectModule,
  MatChipsModule,
  MatSlideToggleModule,
  MatMenuModule,
  MatTooltipModule,
  MatToolbarModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatFormFieldModule,
  MatDatepickerModule,
  ReactiveFormsModule,
  FormsModule,
  MatAutocompleteModule,
  MatIconModule,
  MatCardModule,
  MatDividerModule,
 MatProgressBarModule 

];

@NgModule({
  exports: [...components],
  declarations: [],
  imports: [CommonModule, RouterModule, ...components],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MaterialModule { }
