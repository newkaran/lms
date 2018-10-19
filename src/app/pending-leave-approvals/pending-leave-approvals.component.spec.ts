import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingLeaveApprovalsComponent } from './pending-leave-approvals.component';

describe('PendingLeaveApprovalsComponent', () => {
  let component: PendingLeaveApprovalsComponent;
  let fixture: ComponentFixture<PendingLeaveApprovalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendingLeaveApprovalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingLeaveApprovalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
