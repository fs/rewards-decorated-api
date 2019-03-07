import { Test, TestingModule } from '@nestjs/testing';
import { RewardApiService } from './reward-api.service';
import { ClientRequest } from 'http';

describe('RewardApiService', () => {
  let service: RewardApiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RewardApiService],
    }).compile();

    service = module.get<RewardApiService>(RewardApiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  test('request', () => {
    // Arrange

    // Act
    const expectedResult = service.request();

    // Assert
    expect(expectedResult).toBeInstanceOf(ClientRequest);
  });
});
