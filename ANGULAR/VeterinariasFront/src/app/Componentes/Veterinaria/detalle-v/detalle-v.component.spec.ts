import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleVComponent } from './detalle-v.component';

describe('DetalleVComponent', () => {
  let component: DetalleVComponent;
  let fixture: ComponentFixture<DetalleVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalleVComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
