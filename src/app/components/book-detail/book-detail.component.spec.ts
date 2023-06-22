import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDetailComponent } from './book-detail.component';

describe('AddDetailComponent', () => {
  let component: AddDetailComponent;
  let fixture: ComponentFixture<AddDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddDetailComponent]
    });
    fixture = TestBed.createComponent(AddDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
