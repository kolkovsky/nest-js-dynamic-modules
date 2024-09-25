import { Injectable } from '@nestjs/common';
import * as fs from 'node:fs';
import * as path from 'path';
import * as process from 'node:process';
import { v4 as uuidv4 } from 'uuid';

export type User = {
  id: number;
  name: string;
  email: string;
  age: number;
  moduleId: string;
};

export type UserList = Array<User>;

@Injectable()
export class UserService {
  public async createUsers(payload: Omit<User, 'id'>): Promise<User> {
    const filePath = path.join(process.cwd(), `users.json`);

    const users: UserList = await this.readUsers();

    const userRequest: User = {
      id: uuidv4(),
      ...payload,
    };

    users.push(userRequest);
    fs.writeFileSync(filePath, JSON.stringify(users));

    return userRequest;
  }

  public async readUsers(): Promise<UserList | null> {
    const filePath = path.join(process.cwd(), `users.json`);
    const fileData = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(fileData) as unknown as UserList;
  }
}
