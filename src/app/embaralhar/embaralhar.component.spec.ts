import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmbaralharComponent } from './embaralhar.component';

describe('EmbaralharComponent', () => {
  let component: EmbaralharComponent;
  let fixture: ComponentFixture<EmbaralharComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmbaralharComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmbaralharComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
