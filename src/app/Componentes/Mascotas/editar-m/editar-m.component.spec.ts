import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarMComponent } from './editar-m.component';

describe('EditarMComponent', () => {
  let component: EditarMComponent;
  let fixture: ComponentFixture<EditarMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarMComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
