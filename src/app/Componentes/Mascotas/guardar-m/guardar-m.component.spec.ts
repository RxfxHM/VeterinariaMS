import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardarMComponent } from './guardar-m.component';

describe('GuardarMComponent', () => {
  let component: GuardarMComponent;
  let fixture: ComponentFixture<GuardarMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuardarMComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuardarMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
