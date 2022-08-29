import { Db } from "mongodb";
import { nanoid } from "nanoid";
import MongoDBConnection from "./connection";

export class MongoDBClient {
  public db: Db;
  constructor() {
    MongoDBConnection.getConnection((connection) => {
      this.db = connection;
    });
  }

  public find<T>(collection: string, filter: Object): Promise<T[]> {
    return new Promise((resolve, reject) => {
      this.db
        .collection(collection)
        .find(filter)
        .toArray()
        .then((data) => {
          const items = data.map((item) => {
            item.id = item._id;
            delete item._id;
            return item;
          });
          resolve(items);
        })
        .catch((err) => reject(err));
    });
  }

  public findOneById<T>(collection: string, id: string): Promise<T> {
    return new Promise((resolve, reject) => {
      this.db
        .collection(collection)
        .find({ _id: id })
        .limit(1)
        .toArray((error, find) => {
          if (error) {
            reject(error);
          } else {
            const data = find[0];
            if (data) {
              data.id = data._id;
              delete data._id;
              resolve(data);
            } else {
              reject(new Error("NOT FOUND"));
            }
          }
        });
    });
  }

  public insert<T>(collection: string, model: T): Promise<T> {
    const { id } = model as any;
    return new Promise((resolve, reject) => {
      this.db
        .collection(collection)
        .insertOne({ ...model, _id: id ? id : nanoid() }, (error, insert) => {
          if (error) {
            reject(error);
          } else {
            const data = insert.ops[0];
            data.id = data._id;
            delete data._id;
            resolve(data);
          }
        });
    });
  }

  public update<T>(collection: string, id: string, model: T) {
    return new Promise((resolve, reject) => {
      this.db
        .collection(collection)
        .updateOne({ _id: id }, { $set: model })
        .then((data) => {
          resolve({ id });
        })
        .catch((err) => reject(err));
    });
  }

  public remove(
    collection: string,
    id: string
  ): Promise<Record<string, string>> {
    return new Promise((resolve, reject) => {
      this.db
        .collection(collection)
        .deleteOne({ _id: id })
        .then((data) => {
          resolve({ id });
        })
        .catch((err) => reject(err));
    });
  }
}
