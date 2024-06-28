import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkTeamsComponent } from './work-teams.component';

describe('WorkTeamsComponent', () => {
  let component: WorkTeamsComponent;
  let fixture: ComponentFixture<WorkTeamsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorkTeamsComponent]
    });
    fixture = TestBed.createComponent(WorkTeamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
