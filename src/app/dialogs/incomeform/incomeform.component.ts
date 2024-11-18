import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-incomeform',
  templateUrl: './incomeform.component.html',
  styleUrls: ['./incomeform.component.scss']
})
export class IncomeformComponent {

  @Output() closeForm = new EventEmitter<void>(); // Event emitter to close the form
  incomeForm: FormGroup;

  constructor(private fb: FormBuilder) {
    // Initialize form with validation rules
    this.incomeForm = this.fb.group({
      source: ['', Validators.required],
      amount: [null, [Validators.required, Validators.min(0.01)]],
      date: ['', Validators.required],
      description: ['']
    });
  }

  // Method called on form submission
  onSubmit(): void {
    if (this.incomeForm.valid) {
      const incomeData = this.incomeForm.value;
      console.log('Income Data Submitted:', incomeData);
      // Here you could send incomeData to the backend service to save it

      // Emit closeForm event after submission
      this.closeForm.emit();
    } else {
      console.log('Form is invalid');
    }
  }

  // Method to cancel form and emit close event
  onCancel(): void {
    this.closeForm.emit();
  }
}