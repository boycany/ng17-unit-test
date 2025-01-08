import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeroComponent } from './hero.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('HeroComponent', () => {
  let fixture: ComponentFixture<HeroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeroComponent],
      schemas: [NO_ERRORS_SCHEMA],
    });
    fixture = TestBed.createComponent(HeroComponent);
  });

  it('should have the correct hero', () => {
    fixture.componentInstance.hero = { id: 1, name: 'SuperDude', strength: 3 };
    // fixture.detectChanges();
    expect(fixture.componentInstance.hero.name).toEqual('SuperDude');
  });

  it('should render the hero name in an anchor tag', () => {
    fixture.componentInstance.hero = { id: 1, name: 'SuperDude', strength: 3 };
    fixture.detectChanges();

    const deA = fixture.debugElement.query(By.css('a'));
    console.log('deA :>> ', deA);
    expect(deA.nativeElement.textContent).toContain('SuperDude');

    /**
     * In this case, we are using the By.css method to query the DOM for an anchor tag.
     * (There are more properties available on the DebugElement class that you can use to query the DOM.)
     * But we could also use fixture.nativeElement.querySelector('a') to get the anchor tag.
     */
    // const anchor = fixture.nativeElement.querySelector('a');
    // console.log('anchor :>> ', anchor);

    // expect(anchor.textContent).toContain('SuperDude');
  });
});
