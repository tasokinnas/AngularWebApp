import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerCoachComponent } from './player-coach.component';

describe('PlayerCoachComponent', () => {
  let component: PlayerCoachComponent;
  let fixture: ComponentFixture<PlayerCoachComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerCoachComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerCoachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
