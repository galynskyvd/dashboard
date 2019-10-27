import { IProjectDefault } from '@/types/project'

export interface ITask {
    id: number;
    key: number;
    url: string;
    title: string;
    status?: IStatus;
    assignee?: IUser;
    timeTracking?: ITimeTracking;
    project?: IProjectDefault;
    releaseVersion?: string;
}

export interface IUser {
    name: string;
    avatarUrl: string;
}

export interface IStatus {
    id: Statuses;
    name: string;
}

export interface ITimeTracking {
    originalEstimate: string;
    originalEstimateSeconds: number;
    remainingEstimate: string;
    remainingEstimateSeconds: number;
    timeSpent: string;
    timeSpentSeconds: number;
}

export enum Statuses {
    Complete = 10001,
    Work = 3,
    Test = 10102,
    Revision = 10201,
    Hold = 10900
}
