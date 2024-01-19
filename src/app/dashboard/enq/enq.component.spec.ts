import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnqComponent } from './enq.component';

describe('EnqComponent', () => {
  let component: EnqComponent;
  let fixture: ComponentFixture<EnqComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnqComponent]
    });
    fixture = TestBed.createComponent(EnqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
