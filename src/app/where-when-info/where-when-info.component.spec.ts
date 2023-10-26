import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhereWhenInfoComponent } from './where-when-info.component';

describe('WhereWhenInfoComponent', () => {
  let component: WhereWhenInfoComponent;
  let fixture: ComponentFixture<WhereWhenInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WhereWhenInfoComponent]
    });
    fixture = TestBed.createComponent(WhereWhenInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
