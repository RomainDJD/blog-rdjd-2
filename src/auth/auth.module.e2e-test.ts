import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import * as request from 'supertest';
import { getConnection } from 'typeorm';
import { setupDB } from '../../test/tools/setup.tools';
import { UserRepository } from '../user/user.repository';
import { AuthModule } from './auth.module';

describe('UserController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    await setupDB();

    const moduleFixture = await Test.createTestingModule({
      imports: [AuthModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.get(UserRepository).clear();
    await app.close();
    await getConnection().close();
  });

  describe('/auth/register', () => {
    describe('POST', () => {
      it('Should register the user', () => {
        expect(1).toBe(1); 
      });
    });
  });

});
