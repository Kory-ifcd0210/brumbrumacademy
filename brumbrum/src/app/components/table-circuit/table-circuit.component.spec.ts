import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableCircuitComponent } from './table-circuit.component';

describe('TableCircuitComponent', () => {
  let component: TableCircuitComponent;
  let fixture: ComponentFixture<TableCircuitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableCircuitComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TableCircuitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
