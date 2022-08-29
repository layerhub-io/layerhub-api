import { Request } from "express";
import { Db } from "mongodb";
import { Token } from "../modules/users/interfaces";

function find<T>(collection: string, filter: Object, db: Db): Promise<T> {
  return new Promise((resolve, reject) => {
    db.collection(collection)
      .find(filter)
      .toArray()
      .then((data) => {
        const items = data.map((item) => {
          item.id = item._id;
          delete item._id;
          return item;
        });
        resolve(items[0]);
      })
      .catch((err) => reject(err));
  });
}

export async function getUserIdFromRequest(
  req: Request
): Promise<null | string> {
  const authHeader = req.headers.authorization || "";
  const token = authHeader.split(" ")[1];
  if (token) {
    const db = req.app.locals.db as Db;
    if (db) {
      const tokenInfo = await find<Token>("tokens", { secret: token }, db);
      if (tokenInfo) {
        return tokenInfo.userId;
      }
    }
  }
  return null;
}
