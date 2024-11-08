import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportReportComponent } from './export-report.component';

describe('ExportReportComponent', () => {
  let component: ExportReportComponent;
  let fixture: ComponentFixture<ExportReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExportReportComponent]
    });
    fixture = TestBed.createComponent(ExportReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
