import { Db, MongoClient, MongoError } from "mongodb";
import config from "../app-config";
class MongoDBConnection {
  private static isConnected: boolean = false;
  private static db: Db;
  public static getConnection(result: (connection: Db) => void) {
    if (this.isConnected) {
      return this.db;
    } else {
      this.connect((err, db) => {
        return result(db);
      });
    }
  }
  public static connect(result: (err: MongoError, db: Db) => void) {
    MongoClient.connect(
      config.mongo.connString,
      { useUnifiedTopology: true },
      (err, client) => {
        this.db = client.db(config.mongo.name);
        this.isConnected = true;
        return result(err, this.db);
      }
    );
  }
}

export default MongoDBConnection;
