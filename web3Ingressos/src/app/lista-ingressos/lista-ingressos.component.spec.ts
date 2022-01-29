import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaIngressosComponent } from './lista-ingressos.component';

describe('ListaIngressosComponent', () => {
  let component: ListaIngressosComponent;
  let fixture: ComponentFixture<ListaIngressosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaIngressosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaIngressosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
