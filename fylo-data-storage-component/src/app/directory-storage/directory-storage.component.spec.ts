import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectoryStorageComponent } from './directory-storage.component';

describe('DirectoryStorageComponent', () => {
  let component: DirectoryStorageComponent;
  let fixture: ComponentFixture<DirectoryStorageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectoryStorageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectoryStorageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
