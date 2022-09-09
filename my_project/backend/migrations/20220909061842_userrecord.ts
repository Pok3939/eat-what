import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable("userrecord", (table) => {
        table.increments();
        table.string("restaurant_name");
        table.string("dishes");
        table.string("comment");
        table.integer("rate");
        table.timestamps(false, true);
    })
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable("userrecord");
}

