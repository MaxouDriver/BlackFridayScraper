import {MigrationInterface, QueryRunner} from "typeorm";

export class init1606231326416 implements MigrationInterface {
    name = 'init1606231326416'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "site" ("id" SERIAL NOT NULL, "name" character varying(100) NOT NULL, "url" text NOT NULL, "htmlTarget" text NOT NULL, "value" integer NOT NULL, "productId" integer, CONSTRAINT "PK_635c0eeabda8862d5b0237b42b4" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "product" ("id" SERIAL NOT NULL, "name" character varying(100) NOT NULL, "description" text, CONSTRAINT "PK_bebc9158e480b949565b4dc7a82" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "site" ADD CONSTRAINT "FK_b2e5d149c55f36e2c6010b5160b" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "site" DROP CONSTRAINT "FK_b2e5d149c55f36e2c6010b5160b"`);
        await queryRunner.query(`DROP TABLE "product"`);
        await queryRunner.query(`DROP TABLE "site"`);
    }

}
