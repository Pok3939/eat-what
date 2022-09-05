import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("dishes_id", (table) => {
    table.increments();
    table.string("dishes");
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable("dishes_id");
}
