import { TestBed, inject } from '@angular/core/testing';

import { ChunkloadingService } from './chunkloading.service';

describe('ChunkloadingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChunkloadingService]
    });
  });

  it('should be created', inject([ChunkloadingService], (service: ChunkloadingService) => {
    expect(service).toBeTruthy();
  }));
});
