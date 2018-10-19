import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetrieveLeavesComponent } from './retrieve-leaves.component';

describe('RetrieveLeavesComponent', () => {
  let component: RetrieveLeavesComponent;
  let fixture: ComponentFixture<RetrieveLeavesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetrieveLeavesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetrieveLeavesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
