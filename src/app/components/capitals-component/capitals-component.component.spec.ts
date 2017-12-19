import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapitalsComponentComponent } from './capitals-component.component';

describe('CapitalsComponentComponent', () => {
  let component: CapitalsComponentComponent;
  let fixture: ComponentFixture<CapitalsComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapitalsComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapitalsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
