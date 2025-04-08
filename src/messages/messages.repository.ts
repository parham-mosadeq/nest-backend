/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { readFile, writeFile } from 'fs/promises';

type Message = {
  content: string;
  id: string;
};

type Data = {
  [key: string]: Message;
};

export class MessagesRepository {
  async findOne(id: string) {
    const data: string = await readFile('data.json', 'utf8');
    const parsedData: unknown = JSON.parse(data);

    if (
      typeof parsedData === 'object' &&
      parsedData !== null &&
      !Array.isArray(parsedData)
    ) {
      const dataObject = parsedData as Data;
      return dataObject[id];
    }

    throw new Error('Invalid data format');
  }

  async findAll() {
    const data: string = await readFile('data.json', 'utf8');
    const parsedData: unknown = JSON.parse(data);
    return parsedData;
  }

  async create(content: string) {
    const data: string = await readFile('data.json', 'utf8');
    const parsedData = JSON.parse(data);

    const id = Math.floor(Math.random() * 999);
    parsedData[id] = { id, content };

    await writeFile('data.json', JSON.stringify(parsedData));
    return { id, content };
  }
}
