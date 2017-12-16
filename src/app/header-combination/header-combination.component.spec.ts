import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderCombinationComponent } from './header-combination.component';

describe('HeaderCombinationComponent', () => {
  let component: HeaderCombinationComponent;
  let fixture: ComponentFixture<HeaderCombinationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderCombinationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderCombinationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
