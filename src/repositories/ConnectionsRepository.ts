import { Connection, EntityRepository, Repository } from "typeorm";
import { connection } from "../entities/Connection";

class ConnectionsRepository extends Repository<Connection> {}

export { ConnectionsRepository };
