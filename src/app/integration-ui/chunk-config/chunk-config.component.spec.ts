import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChunkConfigComponent } from './chunk-config.component';

describe('ChunkConfigComponent', () => {
  let component: ChunkConfigComponent;
  let fixture: ComponentFixture<ChunkConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChunkConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChunkConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
