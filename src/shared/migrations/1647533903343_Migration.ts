import { Collection, Db } from 'mongodb'
import { MigrationInterface } from 'mongo-migrate-ts';

export class Migration1647533903343 implements MigrationInterface {
  public async up(db: Db): Promise<Collection<Document>> {
    return db.createCollection('moreOne');
  }

  public async down(db: Db): Promise<boolean> {
    return db.dropCollection('moreOne');
  }
}
