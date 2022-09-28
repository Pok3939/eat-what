import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.alterTable("restaurant", (table) => {
    table.float("lat", 9, 7);
    table.float("lng", 10, 7);
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.alterTable("restaurant", (table) => {
    table.dropColumn("lat");
    table.dropColumn("lng");
  });
}
