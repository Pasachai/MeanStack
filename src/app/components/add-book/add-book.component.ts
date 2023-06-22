import { Component ,OnInit ,NgZone} from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/service/crud.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent {

  bookForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private crudServive: CrudService
  ){
    this.bookForm = this.formBuilder.group({
      name: [''],
      price: [''],
      description: [''],
    })
  }

  ngOnInIt(): void {

  }
  onSubmit():any {
    this.crudServive.Addbook(this.bookForm.value)
    .subscribe(() =>{
      console.log("Data added successfully");
      this.ngZone.run(() => this.router.navigateByUrl('/books-list'))
    }, (err) => {
      console.log(err);
    }
    )
  }

}
