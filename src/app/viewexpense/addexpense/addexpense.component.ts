import { Component, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm} from '@angular/forms'
import { EventEmitter } from 'stream';
import { Expense } from '../../Model/expense';
@Component({
  selector: 'app-addexpense',
  imports: [CommonModule, FormsModule],
  templateUrl: './addexpense.component.html',
  styleUrl: './addexpense.component.css'
})
export class AddexpenseComponent{

  expense = {
    title: '',
    amount: '',
    category: '',
    date: ''
  };

  @Output()
  SubmitForm:EventEmitter<any> =new EventEmitter<any>();

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.SubmitForm.emit(form.value);
      console.log("Expense Added:", this.expense);
      form.reset();
    }
  }

  // expense = {
  //   title: '',
  //   amount: null,
  //   category: '',
  //   date: ''
  // };

  // submitted = false; // Tracks whether the form is submitted

  // onSubmit(expenseForm: any) {
  //   this.submitted = true; // Mark form as submitted

  //   if (expenseForm.invalid) {
  //     return; // Stop if the form is invalid
  //   }

  //   console.log('Expense Added:', this.expense);

  //   // Reset form and submission state
  //   expenseForm.resetForm();
  //   this.submitted = false;
  // }

  // shouldShowError(field: any) {
  //   return (this.submitted && field?.invalid) || (field?.touched && field?.invalid);
  // }
}
