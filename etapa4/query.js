const { GraphQLObjectType, GraphQLInt, GraphQLList } = require("graphql");
const Course = require("./schemaCourses");
const CoursesData = require("./db");
const Query = new GraphQLObjectType({
  name: "Query",
  description: "consulta general",
  fields: () => {
    return {
      courses: {
        type: new GraphQLList(Course),
        args: {
          id: {
            type: GraphQLInt
          }
        },
        resolve(root, args) {
          let id = arg.id;
          let data = CoursesData.filter(course => {
            return course.id == id;
          })[0];
          return data;
        }
      }
    };
  }
});
module.exports = Query;
