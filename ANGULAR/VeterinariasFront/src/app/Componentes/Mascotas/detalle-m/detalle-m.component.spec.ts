import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleMComponent } from './detalle-m.component';

describe('DetalleMComponent', () => {
  let component: DetalleMComponent;
  let fixture: ComponentFixture<DetalleMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalleMComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
