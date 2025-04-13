import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardarVComponent } from './guardar-v.component';

describe('GuardarVComponent', () => {
  let component: GuardarVComponent;
  let fixture: ComponentFixture<GuardarVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuardarVComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuardarVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
