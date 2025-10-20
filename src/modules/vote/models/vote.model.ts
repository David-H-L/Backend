import { DataTypes, Model } from "sequelize";
import { sequelize } from "../../../config/database.config"
import { IVoto, VoteCreationAttributes } from "../interfaces/votes.interface";

class Vote extends Model<IVoto, VoteCreationAttributes> implements IVoto {
  public id!: number;
  public name!: string;
  public date!: Date;
  public count!: number;
  public finished!: boolean;
  declare createdAt: Date;
  declare updatedAt: Date;
}

Vote.init(
  {
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    count: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
    },
    finished: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    }
  },
  { 
    sequelize,
    tableName: 'votes',
    timestamps: true,
   },
);

export default Vote;