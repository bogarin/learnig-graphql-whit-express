const Sequelize=require('sequelize');
const Faker=require('faker');
const _ =require('lodash');

const Conn = new Sequelize(
  'relay',
  'postgres',
  'example',
  {
    dialect: 'postgres',
    host: 'localhost'
  }
);

const Person = Conn.define('person', {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    validate: {
      isEmail: true
    }
  }
});

const Post = Conn.define('post', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  content: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

// Relations
Person.hasMany(Post);
Post.belongsTo(Person);

Conn.sync({ force: true }).then(()=> {
  _.times(10, ()=> {
    return Person.create({
      firstName: Faker.name.firstName(),
      lastName: Faker.name.lastName(),
      email: Faker.internet.email()
    }).then(person => {
      return person.createPost({
        title: `Sample post by ${person.firstName}`,
        content: 'here is some content'
      });
    });
  });
});

module.exports=Conn;