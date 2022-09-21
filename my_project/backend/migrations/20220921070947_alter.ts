import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.alterTable("userrecord", (table) => {
    table.dropColumn("restaurant_name");
    table.dropColumn("dishes");
    table.string("restaurant_id");
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.alterTable("userrecord", (table) => {
    table.string("restaurant_name");
    table.string("dishes");
    table.dropColumn("restaurant_id");
  });
}
