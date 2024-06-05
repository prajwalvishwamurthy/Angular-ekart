import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent {
  @Input() all: number = 0;
  @Input() inStock: number = 0;
  @Input() outOfStock: number = 0;

  selectedFilterRadioButton: string = 'all';
  @Output() selectedFilterRadioButtonChange = new EventEmitter<string>();
  onSelectedFilterRadioButtonChange() {
    this.selectedFilterRadioButtonChange.emit(this.selectedFilterRadioButton);
  }
}
