import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.alterTable("userrecord", (table) => {
    table.string("username");
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.alterTable("userrecord", (table) => {
    table.dropColumn("username");
  });
}
