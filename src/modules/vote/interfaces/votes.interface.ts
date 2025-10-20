import { Optional } from "sequelize";

export interface IVoto {
  id: number,
  name: string,
  date: Date,
  count: number,
  finished: boolean,
}

export interface IVoteFilter {
  name?: string;
  startAt?: Date;
  endsAt?: Date;
  status?: boolean;
}

export interface VoteCreationAttributes extends Optional <IVoto, 'id'>{}