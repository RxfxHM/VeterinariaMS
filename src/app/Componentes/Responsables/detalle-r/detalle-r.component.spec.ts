import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleRComponent } from './detalle-r.component';

describe('DetalleRComponent', () => {
  let component: DetalleRComponent;
  let fixture: ComponentFixture<DetalleRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalleRComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
