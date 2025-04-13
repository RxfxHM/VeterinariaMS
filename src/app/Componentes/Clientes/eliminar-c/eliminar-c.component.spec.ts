import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarCComponent } from './eliminar-c.component';

describe('EliminarCComponent', () => {
  let component: EliminarCComponent;
  let fixture: ComponentFixture<EliminarCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EliminarCComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
