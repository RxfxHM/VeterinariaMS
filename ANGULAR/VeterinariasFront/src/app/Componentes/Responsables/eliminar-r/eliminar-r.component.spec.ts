import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarRComponent } from './eliminar-r.component';

describe('EliminarRComponent', () => {
  let component: EliminarRComponent;
  let fixture: ComponentFixture<EliminarRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EliminarRComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
