import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjerciciosUserComponent } from './ejercicios-user.component';

describe('EjerciciosUserComponent', () => {
  let component: EjerciciosUserComponent;
  let fixture: ComponentFixture<EjerciciosUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EjerciciosUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EjerciciosUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
