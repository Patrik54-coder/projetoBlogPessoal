import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostagemDeletComponent } from './postagem-delet.component';

describe('PostagemDeletComponent', () => {
  let component: PostagemDeletComponent;
  let fixture: ComponentFixture<PostagemDeletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostagemDeletComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostagemDeletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
