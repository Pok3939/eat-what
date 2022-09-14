import { Knex } from "knex";
import { hashPassword } from "../hash";
export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("restaurant").del();
  await knex("dishes_id").del();
  await knex("users").del();
  await knex("userrecord").del();
  // Inserts seed entries
  await knex("dishes_id").insert([
    { text: "chinese", value: 1 },
    { text: "cantonese", value: 2 },
    { text: "taiwanese", value: 3 },
    { text: "japanese", value: 4 },
    { text: "korean", value: 5 },
    { text: "thai", value: 6 },
    { text: "middle_eastern", value: 7 },
    { text: "western", value: 8 },
  ]);

  await knex("users").insert({
    username: "admin",
    password: await hashPassword("123123"),
  });

  // await knex("userrecord").insert({
  //   restaurant_name: "AAA Restaurant",
  //   dishes: "Chinese",
  //   comment: "tasty, will come back soon",
  //   rate:"7.5"
  // })
}
