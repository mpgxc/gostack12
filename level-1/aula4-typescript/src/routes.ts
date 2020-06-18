import { Request, Response } from 'express';
import createUser from './services/CreateUser';

export function helloWord(request: Request, response: Response) {

  const user = createUser({
    name: "mpgxc",
    email: "mpgxc@live.com",
    password: 12345,
    numbers: [1, 2, 3, 4, 5],
    techs: [
      "Node",
      "React",
      "React Native",
      { title: "React", experience: 12345 },
      { title: "React Native", experience: 123 }
    ]
  });

  return response.json({ user });
}