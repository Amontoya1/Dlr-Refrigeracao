import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'dlr-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  public form = this.fb.group({
    name: new FormControl(''),
    email: new FormControl(''),
    message: new FormControl(''),
  });

  formCorrectlySubmitted: boolean = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  onSubmit() {
    if (this.form.valid) {
      this.formCorrectlySubmitted = true;

      // code necessary to send email to Junior via FormSubmit.co
      // documentation here: https://formsubmit.co/ajax-documentation
      fetch('https://formsubmit.co/ajax/a.montoya1@hotmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: this.form.get('name')!.value,
          email: this.form.get('email')!.value,
          message: this.form.get('message')!.value,
        }),
      })
        .then((response) => {
          response.json();
          this.resetAccount();
        })
        .then((data) => console.log(data))
        .catch((error) => console.log(error));
    }
  }

  resetAccount() {
    this.form.patchValue({
      name: '',
      email: '',
      message: '',
    });
  }
}
