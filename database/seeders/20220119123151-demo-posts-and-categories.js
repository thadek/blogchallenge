'use strict';
const { Post, Category } = require('../models')

module.exports = {
  async up(queryInterface, Sequelize) {

    await Category.create({ name: 'Coding' })
    return Promise.all([
      Post.bulkCreate([{
        title: "Mi primer día en Alkemy",
        content: "Hoy fue el primer dia en alkemy, que emoción(?)",
        imageURL: "https://media.giphy.com/media/Lr3UeH9tYu3qJtsSUg/giphy.gif",
        CategoryId: 1,
        createdAt: new Date('2022-01-01T20:24:00')

      },
      {
        title: "Mi segundo día en Alkemy",
        content: "Hoy fue el segundo dia en alkemy, vimos como romper cosas en github(?)",
        imageURL: "https://media.giphy.com/media/3o7aCPLAT9ZbS4VBHa/giphy.gif",
        CategoryId: 1,
        createdAt: new Date('2022-01-02T20:21:00')

      },
      {
        title: "Mi tercer día en Alkemy",
        content: "Hoy fue el tercer dia en alkemy, ya rompi algo en desarrollo, todavía no se dan cuenta",
        CategoryId: 1,
        imageURL: "https://media.giphy.com/media/xT8qBgHkfCACqvjJny/giphy.gif",
        createdAt: new Date('2022-01-03T20:11:00')

      },
      {
        title: "Mi cuarto día en Alkemy",
        content: "Hoy fue el cuarto dia en alkemy, ya arregle lo que rompi ayer, pero se rompio otra cosa",
        CategoryId: 1,
        imageURL: "https://media.giphy.com/media/v9AKHhCnrQ4rS/giphy.gif",
        createdAt: new Date('2022-01-04T20:12:00')

      },
      {
        title: "Mi quinto día en Alkemy",
        content: "AYUDA YA NO QUIERO ROMPER MAS COSAS ",
        imageURL: "https://media.giphy.com/media/131s7DE2m4UWwo/giphy.gif",
        CategoryId: 1,
        createdAt: new Date('2022-01-05T20:14:00')
      }, {
        title: "Mi sexto día en Alkemy",
        content: "Vivir es un concepto, todos lo somos y al mismo tiempo no.. Mergeamos a master y bugeamos a todos :'>",
        CategoryId: 1,
        imageURL: "https://media.giphy.com/media/3o72FaZgzzFmqoNfBm/giphy.gif",
        createdAt: new Date('2022-01-06T20:43:00')
      }
      ])
    ])

  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
