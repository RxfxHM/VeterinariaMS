import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarRComponent } from './listar-r.component';

describe('ListarRComponent', () => {
  let component: ListarRComponent;
  let fixture: ComponentFixture<ListarRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarRComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
