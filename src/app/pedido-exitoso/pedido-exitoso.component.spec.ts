import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidoExitosoComponent } from './pedido-exitoso.component';

describe('PedidoExitosoComponent', () => {
  let component: PedidoExitosoComponent;
  let fixture: ComponentFixture<PedidoExitosoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PedidoExitosoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PedidoExitosoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
