import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrinterCreatorComponent } from './printer-creator.component';

describe('PrinterCreatorComponent', () => {
  let component: PrinterCreatorComponent;
  let fixture: ComponentFixture<PrinterCreatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrinterCreatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrinterCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
