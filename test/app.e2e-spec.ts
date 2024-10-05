import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
      providers: [],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });

  it('should can say hallo', async () => {
    const result = await request(app.getHttpServer())
      .get('/api/user/hallo')
      .query({
        firstName: 'wayan',
        lastName: 'bharata',
      });
    expect(result.status).toBe(200);
    expect(result.text).toBe('hallo wayan bharata');
  });

});
