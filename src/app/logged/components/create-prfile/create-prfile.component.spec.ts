import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePrfileComponent } from './create-prfile.component';

describe('CreatePrfileComponent', () => {
  let component: CreatePrfileComponent;
  let fixture: ComponentFixture<CreatePrfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatePrfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePrfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
