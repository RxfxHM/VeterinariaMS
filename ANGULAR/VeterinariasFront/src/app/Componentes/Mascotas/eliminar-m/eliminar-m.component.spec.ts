import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarMComponent } from './eliminar-m.component';

describe('EliminarMComponent', () => {
  let component: EliminarMComponent;
  let fixture: ComponentFixture<EliminarMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EliminarMComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
