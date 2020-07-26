import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LerComponent } from './ler.component';

describe('LerComponent', () => {
  let component: LerComponent;
  let fixture: ComponentFixture<LerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
