import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColucoeComponent } from './colucoe.component';

describe('ColucoeComponent', () => {
  let component: ColucoeComponent;
  let fixture: ComponentFixture<ColucoeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColucoeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColucoeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
