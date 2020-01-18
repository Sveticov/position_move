import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppWinSizeModuleComponent } from './app-win-size-module.component';

describe('AppWinSizeModuleComponent', () => {
  let component: AppWinSizeModuleComponent;
  let fixture: ComponentFixture<AppWinSizeModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppWinSizeModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppWinSizeModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
