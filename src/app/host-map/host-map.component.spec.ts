import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostMapComponent } from './host-map.component';

describe('HostMapComponent', () => {
  let component: HostMapComponent;
  let fixture: ComponentFixture<HostMapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HostMapComponent]
    });
    fixture = TestBed.createComponent(HostMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
