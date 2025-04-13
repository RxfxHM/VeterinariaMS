import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarVComponent } from './listar-v.component';

describe('ListarVComponent', () => {
  let component: ListarVComponent;
  let fixture: ComponentFixture<ListarVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarVComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
