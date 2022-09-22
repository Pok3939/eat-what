import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.alterTable("userrecord", (table) => {
    table.string("user_id");
    table.dropColumn("username");
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.alterTable("userrecord", (table) => {
    table.dropColumn("user_id");
    table.string("username");
  });
}
