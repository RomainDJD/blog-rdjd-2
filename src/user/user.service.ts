import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
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

   /**
   * Returns a user updated partially or totally
   *
   * @param id - user id
   * @param dto - partial User
   * @returns Resolves with User
   */
  async deleteUser(id: string) {
    const user = await this.userRepository.findOne(id);
    return this.userRepository.remove(user)
  }
}

