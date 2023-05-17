import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RumeursComponent } from './rumeurs.component';

describe('RumeursComponent', () => {
  let component: RumeursComponent;
  let fixture: ComponentFixture<RumeursComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RumeursComponent]
    });
    fixture = TestBed.createComponent(RumeursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
