import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompraIngressoComponent } from './compra-ingresso.component';

describe('CompraIngressoComponent', () => {
  let component: CompraIngressoComponent;
  let fixture: ComponentFixture<CompraIngressoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompraIngressoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompraIngressoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
