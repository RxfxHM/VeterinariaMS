import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarVComponent } from './editar-v.component';

describe('EditarVComponent', () => {
  let component: EditarVComponent;
  let fixture: ComponentFixture<EditarVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarVComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
