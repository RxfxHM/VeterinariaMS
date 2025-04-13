import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardarRComponent } from './guardar-r.component';

describe('GuardarRComponent', () => {
  let component: GuardarRComponent;
  let fixture: ComponentFixture<GuardarRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuardarRComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuardarRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
