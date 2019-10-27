import { ITask } from '@/types/task'

export interface IProject extends IProjectDefault {
  id: number;
  name: string;
  lastVersion: string;
  allVersions: Array<string>;
  tasks: Array<ITask>;
  storage: IStorage;
  isActive: boolean;
  standUrl: string;
}

export interface IProjectDefault {
  id: number;
  name: string;
}

export interface IStorage {
  template: string;
  extension: string;
}
