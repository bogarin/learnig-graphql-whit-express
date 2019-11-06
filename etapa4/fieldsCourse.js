const { GraphQLInt, GraphQLString } = require("graphql");

module.exports = {
  id: {
    description: "id del curso",
    type: GraphQLInt,
    resolve(course) {
      return course.id;
    }
  },
  title: {
    description: "titulo del curso",
    type: GraphQLString,
    resolve(course) {
      return course.title;
    }
  },
  author: {
    description: "autor del curso",
    type: GraphQLString,
    resolve(course) {
      return course.author;
    }
  },
  description: {
    description: "descripcion del curso",
    type: GraphQLString,
    resolve(course) {
      return course.description;
    }
  },
  topic: {
    description: "tecnologia del curso",
    type: GraphQLString,
    resolve(course) {
      return course.topic;
    }
  },
  url: {
    description: "url del curso",
    type: GraphQLString,
    resolve(course) {
      return course.url;
    }
  }
};
