import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarRComponent } from './editar-r.component';

describe('EditarRComponent', () => {
  let component: EditarRComponent;
  let fixture: ComponentFixture<EditarRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarRComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
