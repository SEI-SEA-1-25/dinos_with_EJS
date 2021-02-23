'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('dinos', [
     {
        name: "Littlefoot",
        type: "Brontosaurus",
        createdAt: new Date(),
        updatedAt: new Date()
     },
     {
        name: "Ducky",
        type: "Parasaurolophus",
        createdAt: new Date(),
        updatedAt: new Date()
     },
     {
        name: "Petrie",
        type: "Pteranodon",
        createdAt: new Date(),
        updatedAt: new Date()
     },
     {
        name: "Spike",
        type: "Stegosaurus",
        createdAt: new Date(),
        updatedAt: new Date()
     }
    ])

   await queryInterface.bulkInsert('creatures', [
      {
         type:"giant beaver",
         img_url:"http://www.beringia.com/sites/default/files/Giant-Beaver-banner.jpg",
         createdAt: new Date(),
         updatedAt: new Date()
      },
      {
         type:"mastodon",
         img_url:"https://cdn-images-1.medium.com/max/1200/1*a2VvYsKGApR-E1SnT5O7yQ.jpeg",
         createdAt: new Date(),
         updatedAt: new Date()
      },
      {
         type:"saber-toothed salmon",
         img_url:"https://cottagelife.com/wp-content/uploads/2014/11/Oncorhynchus_rastrosus.jpg",
         createdAt: new Date(),
         updatedAt: new Date()
      },
      {
         type:"megalonyx",
         img_url:"https://animalgeography.files.wordpress.com/2018/08/sloth-banner-e1535192925361.jpg?w=584&h=325",
         createdAt: new Date(),
         updatedAt: new Date()
      },
   ])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
