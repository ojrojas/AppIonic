import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HowhavePage } from './howhave.page';

describe('HowhavePage', () => {
  let component: HowhavePage;
  let fixture: ComponentFixture<HowhavePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HowhavePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HowhavePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
