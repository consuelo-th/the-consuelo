const ROLE = {
    ADMIN: 'admin',
    BASIC: 'basic'
  }
  
  module.exports = {
    ROLE: ROLE,
    users: [
      {
        id: 1,
        email: 'admin@consuelo.com',
        password: `123456`,
        role: ROLE.ADMIN
      },
      {
        id: 2,
        email: 'user1@consuelo.com',
        password: `123456`,
        role: ROLE.BASIC
      },
      {
        id: 3,
        email: 'user2@consuelo.com',
        password: `123456`,
        role: ROLE.BASIC
      },
      {
        id: 4,
        email: 'user4@consuelo.com',
        password: `123456`,
        role: ROLE.BASIC
      },
    ]
  }