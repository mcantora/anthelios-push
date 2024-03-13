import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardBoosterInstructionsComponent } from './card-booster-instructions.component';

describe('CardBoosterComponent', () => {
  let component: CardBoosterInstructionsComponent;
  let fixture: ComponentFixture<CardBoosterInstructionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardBoosterInstructionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardBoosterInstructionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
