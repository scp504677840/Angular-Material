import {NgModule} from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule
} from '@angular/material';
import {ScrollDispatchModule} from '@angular/cdk/scrolling';
import {Dir} from '@angular/cdk/bidi';

@NgModule({
    imports: [
        /* Animations */
        BrowserAnimationsModule,
        // NoopAnimationsModule,
        /*Form Controls*/
        MatAutocompleteModule,
        MatCheckboxModule,
        MatDatepickerModule,
        MatFormFieldModule,
        MatInputModule,
        MatRadioModule,
        MatSelectModule,
        MatSliderModule,
        MatSlideToggleModule,
        /*Navigation*/
        MatMenuModule,
        MatSidenavModule,
        MatToolbarModule,
        /*Layout*/
        MatCardModule,
        MatDividerModule,
        MatExpansionModule,
        MatGridListModule,
        MatListModule,
        MatStepperModule,
        MatTabsModule,
        MatTreeModule,
        /*Buttons & Indicators*/
        MatButtonModule,
        MatButtonToggleModule,
        MatBadgeModule,
        MatChipsModule,
        MatIconModule,
        MatProgressSpinnerModule,
        MatProgressBarModule,
        /*Popups & Modals*/
        MatBottomSheetModule,
        MatDialogModule,
        MatSnackBarModule,
        MatTooltipModule,
        /*Data table*/
        MatPaginatorModule,
        MatSortModule,
        MatTableModule
    ],
    exports: [
        /* Animations */
        BrowserAnimationsModule,
        // NoopAnimationsModule,
        /*Form Controls*/
        MatAutocompleteModule,
        MatCheckboxModule,
        MatDatepickerModule,
        MatFormFieldModule,
        MatInputModule,
        MatRadioModule,
        MatSelectModule,
        MatSliderModule,
        MatSlideToggleModule,
        /*Navigation*/
        MatMenuModule,
        MatSidenavModule,
        MatToolbarModule,
        /*Layout*/
        MatCardModule,
        MatDividerModule,
        MatExpansionModule,
        MatGridListModule,
        MatListModule,
        MatStepperModule,
        MatTabsModule,
        MatTreeModule,
        /*Buttons & Indicators*/
        MatButtonModule,
        MatButtonToggleModule,
        MatBadgeModule,
        MatChipsModule,
        MatIconModule,
        MatProgressSpinnerModule,
        MatProgressBarModule,
        /*Popups & Modals*/
        MatBottomSheetModule,
        MatDialogModule,
        MatSnackBarModule,
        MatTooltipModule,
        /*Data table*/
        MatPaginatorModule,
        MatSortModule,
        MatTableModule,
        /*cdk*/
        ScrollDispatchModule
    ],
    providers: [Dir]
})
export class MaterialModule {
}