'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Blogs', [
      {
        title: 'Second Blog',
        slug: 'second-blog',
        content: '<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>',
        image: 'https://cdn-storage.pfcontent.net/storage/8.0/photo.aspx?photo=689252593&x=jxT1SXiurcz1Dr3z79Gvr7CiXphYYdY9&size=700&m=820096156',
        published_at: new Date('2020-01-01'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Third Blog',
        slug: 'third-blog',
        content: '<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>',
        image: 'https://cdn-storage.pfcontent.net/storage/8.0/photo.aspx?photo=689252593&x=jxT1SXiurcz1Dr3z79Gvr7CiXphYYdY9&size=700&m=820096156',
        published_at: new Date('2022-01-10'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'I lost count Blog',
        slug: 'i-lost-count-blog',
        content: '<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>',
        image: 'https://cdn-storage.pfcontent.net/storage/8.0/photo.aspx?photo=689252593&x=jxT1SXiurcz1Dr3z79Gvr7CiXphYYdY9&size=700&m=820096156',
        published_at: new Date('2023-07-01'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'One more Blog',
        slug: 'one-more-blog',
        content: '<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>',
        image: 'https://cdn-storage.pfcontent.net/storage/8.0/photo.aspx?photo=689252593&x=jxT1SXiurcz1Dr3z79Gvr7CiXphYYdY9&size=700&m=820096156',
        published_at: new Date('2023-05-09'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Sixth Blog',
        slug: 'sixth-blog',
        content: '<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>',
        image: 'https://cdn-storage.pfcontent.net/storage/8.0/photo.aspx?photo=689252593&x=jxT1SXiurcz1Dr3z79Gvr7CiXphYYdY9&size=700&m=820096156',
        published_at: new Date('2022-11-15'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'One last Blog',
        slug: 'one-last-blog',
        content: '<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>',
        image: 'https://cdn-storage.pfcontent.net/storage/8.0/photo.aspx?photo=689252593&x=jxT1SXiurcz1Dr3z79Gvr7CiXphYYdY9&size=700&m=820096156',
        published_at: new Date('2024-01-03'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Maybe One more Blog',
        slug: 'maybe-one-more-blog',
        content: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>',
        image: 'https://cdn-storage.pfcontent.net/storage/8.0/photo.aspx?photo=591361306&x=0c9IPuXUK1h02eB9JGo3dFuOeuqLSMgj&size=700&m=820095046',
        published_at: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
      },]);
    },
  

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Blogs', null, {});
  }
};
