import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarMComponent } from './listar-m.component';

describe('ListarMComponent', () => {
  let component: ListarMComponent;
  let fixture: ComponentFixture<ListarMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarMComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
