import { Inject, Injectable } from '@nestjs/common';
import { User } from './entity/user.entity';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(
    @Inject(UserRepository) private readonly userRepository: UserRepository,
  ) {}

  /**
   * Returns a user identified by its id
   *
   * @param id - user id
   * @returns Resolves with User
   */
  async getById(id: string) {
    return this.userRepository.findOne(id);
  }

  async SetUser(userId: string, dto: Partial<User>) {
    await this.userRepository.update({ userId }, { ...dto });
    return this.userRepository.findOne(userId);
  }
}
