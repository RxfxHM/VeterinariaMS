import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarVComponent } from './eliminar-v.component';

describe('EliminarVComponent', () => {
  let component: EliminarVComponent;
  let fixture: ComponentFixture<EliminarVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EliminarVComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
