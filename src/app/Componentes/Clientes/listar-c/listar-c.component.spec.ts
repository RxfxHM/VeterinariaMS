import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarCComponent } from './listar-c.component';

describe('ListarCComponent', () => {
  let component: ListarCComponent;
  let fixture: ComponentFixture<ListarCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarCComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
