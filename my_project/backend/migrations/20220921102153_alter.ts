import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.alterTable("userrecord", (table) => {
    table.string("restaurant_name");
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.alterTable("userrecord", (table) => {
    table.dropColumn("restaurant_id");
  });
}
