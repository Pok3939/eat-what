import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("restaurant", (table) => {
    table.increments();
    table.integer("restaurant_id").unique();
    table.string("restaurant_name");
    table.string("restaurant_icon");
    table.string("restaurant_phone");
    table.string("restaurant_address");
    table.string("restaurant_photo1");
    table.string("restaurant_photo2");
    table.string("restaurant_photo3");
    table.string("restaurant_menu");
    table.integer("restaurant_dishes_id");
    table.foreign('restaurant_dishes_id').references('dishes_id.id');
    table.timestamps(false, true);
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable("restaurant");
}
