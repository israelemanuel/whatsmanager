import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsiteListComponent } from './website-list.component';

describe('WebsiteListComponent', () => {
  let component: WebsiteListComponent;
  let fixture: ComponentFixture<WebsiteListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebsiteListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebsiteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
