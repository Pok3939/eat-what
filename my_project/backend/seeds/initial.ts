import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("restaurant").del();
  await knex("dishes_id").del();

  // Inserts seed entries
  const ids = await knex("dishes_id")
    .insert([
      { dishes: "chinese" },
      { dishes: "cantonese" },
      { dishes: "taiwanese"},
      { dishes: "japanese" },
      { dishes: "korean" },
      { dishes: "thai" },
      { dishes: "middle_eastern" },
      { dishes: "western" },
    ])
    .returning("id");

  await knex("restaurant").insert({
    restaurant_name: "ABC Restaurant",
    restaurant_icon: "grid1.jpg",
    restaurant_phone: "1234 5678",
    restaurant_address: "HK",
    restaurant_photo1: "grid1.jpg",
    restaurant_photo2: "grid2.jpg",
    restaurant_photo3: "grid3.jpg",
    restaurant_menu: "Menu1.jpg",
    restaurant_dishes_id: ids[0].id,
  });
}
