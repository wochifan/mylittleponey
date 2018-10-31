import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PonyDetailsComponent } from './pony-details.component';

describe('PonyDetailsComponent', () => {
  let component: PonyDetailsComponent;
  let fixture: ComponentFixture<PonyDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PonyDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PonyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
