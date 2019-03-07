import { Test, TestingModule } from '@nestjs/testing';
import { createRequest, createResponse } from 'node-mocks-http';
import { ProxyController } from './proxy.controller';
import { PassThrough } from 'stream';
import { RewardApiService } from '../reward-api/reward-api.service';

describe('Proxy Controller', () => {
  let rewardsApiService: RewardApiService;
  let controller: ProxyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProxyController],
      providers: [RewardApiService],
    }).compile();

    rewardsApiService = module.get<RewardApiService>(RewardApiService);
    controller = module.get<ProxyController>(ProxyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  test('proxy', async () => {
    // Arrange
    const mockIncomingMessage = createRequest();
    const expectedServerResponse = createResponse();

    const mockRewardsApiResponse = `{"data": 123}`;
    const mockRewardsApiStream = new PassThrough();
    mockRewardsApiStream.push(mockRewardsApiResponse);
    mockRewardsApiStream.end();

    jest.spyOn(rewardsApiService, 'request').mockImplementation(() => (options, callback) => {
      callback(null, mockRewardsApiStream);
    });

    // Act
    await controller.proxy(mockIncomingMessage, expectedServerResponse);

    // Assert
    expect(expectedServerResponse._getData()).toEqual(mockRewardsApiResponse);
  });
});
