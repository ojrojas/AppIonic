import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UsersAppPage } from './users-app.page';

describe('UsersAppPage', () => {
  let component: UsersAppPage;
  let fixture: ComponentFixture<UsersAppPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersAppPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UsersAppPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
