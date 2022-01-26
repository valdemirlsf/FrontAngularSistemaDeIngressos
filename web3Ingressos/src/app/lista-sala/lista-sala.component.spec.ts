import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaSalaComponent } from './lista-sala.component';

describe('ListaSalaComponent', () => {
  let component: ListaSalaComponent;
  let fixture: ComponentFixture<ListaSalaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaSalaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaSalaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
