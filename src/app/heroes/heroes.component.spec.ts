// import jasmine from 'jasmine';
import { of } from 'rxjs';
import { HeroService } from '../hero.service';
import { HeroesComponent } from './heroes.component';
import { Component, Input, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Hero } from '../hero';

describe('HeroesComponent', () => {
  /** Isolated test */
  let component: HeroesComponent;
  let HEROES: { id: number; name: string; strength: number }[];
  let mockHeroService: jasmine.SpyObj<HeroService>;

  /** shallow integration test */
  let fixture: ComponentFixture<HeroesComponent>;

  @Component({
    selector: 'app-hero',
    template: '<div></div>',
  })
  class FakeHeroComponent {
    @Input() hero: Hero;
  }

  beforeEach(() => {
    HEROES = [
      {
        id: 1,
        name: 'SpiderDude',
        strength: 8,
      },
      {
        id: 2,
        name: 'Wonderful Woman',
        strength: 24,
      },
      {
        id: 3,
        name: 'SuperDude',
        strength: 55,
      },
    ];

    mockHeroService = jasmine.createSpyObj([
      'getHeroes',
      'addHero',
      'deleteHero',
    ]);

    TestBed.configureTestingModule({
      declarations: [HeroesComponent, FakeHeroComponent],
      providers: [
        {
          provide: HeroService,
          useValue: mockHeroService,
        },
      ],
      // schemas: [NO_ERRORS_SCHEMA],
    });
    fixture = TestBed.createComponent(HeroesComponent);

    // component = new HeroesComponent(mockHeroService);
  });

  it('should set Heroes correctly from the service', () => {
    mockHeroService.getHeroes.and.returnValue(of(HEROES));
    fixture.detectChanges();
    expect(fixture.componentInstance.heroes.length).toBe(3);
  });

  // describe('delete', () => {
  //   beforeEach(() => {
  //     mockHeroService.deleteHero.and.returnValue(
  //       of({
  //         id: 3,
  //         name: 'SuperDude',
  //         strength: 55,
  //       })
  //     );

  //     component.heroes = HEROES;
  //     component.delete(HEROES[2]);
  //   });

  //   it('should call deleteHero', () => {
  //     expect(mockHeroService.deleteHero).toHaveBeenCalledWith(HEROES[2]);
  //   });

  //   it('should remove the indicated hero from the heroes list', () => {
  //     expect(component.heroes.length).toBe(2);
  //   });
  // });
});
