const { GraphQLObjectType } = require("graphql");
const Db = require("./db");
const  fieldsCourse  = require("./fieldsCourse");
module.exports =new GraphQLObjectType({
  name: "Course",
  description: "coleccion de información de los cursos",
  fields() {
    return fieldsCourse;
  }
});
