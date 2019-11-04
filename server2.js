const express = require("express");
const explress_graphql = require("express-graphql");
const { buildSchema } = require("graphql");
const app = express();

const schema = buildSchema(`
    type Query{
        message:String
        course(id:Int!):Course
        courses(topic:String):[Course]
    }
    type Mutation {
      updateCourseTopic(id: Int!, topic: String!): Course
  }
    type Course{
      id:Int
      title:String
      author:String
      description:String
      topic:String
      url:String
    }

`);
const getCourse = arg => {
  let id = arg.id;
  let data = CoursesData.filter(course => {
    return course.id == id;
  })[0];
  return data;
};
const getCourses = arg => {
  if (!arg.topic) {
    return CoursesData;
  }
  return CoursesData.filter(courses => courses.topic === arg.topic);
};
const updateCourseTopic = ({id, topic}) => {
  CoursesData.map(course => {
    if (course.id === id) {
      course.topic = topic;
      return course;
    }
  });
  return CoursesData.filter(course => course.id === id)[0];
};
const root = {
  message: () => "hello word",
  course: getCourse,
  courses: getCourses,
  updateCourseTopic: updateCourseTopic
};

const CoursesData = [
  {
    id: 1,
    title: "ramon",
    author: "bogarin",
    description: "valenzuela",
    topic: "Node.js",
    url: "liz gabriela reynaga talamantes"
  },
  {
    id: 2,
    title: "ramon2",
    author: "bogarin",
    description: "valenzuela",
    topic: "Node.js",
    url: "liz gabriela reynaga talamantes"
  },
  {
    id: 3,
    title: "ramon3",
    author: "bogarin",
    description: "valenzuela",
    topic: "Node.js",
    url: "liz gabriela reynaga talamantes"
  }
];

app.use(
  "/graphql",
  explress_graphql({
    schema: schema,
    rootValue: root,
    graphiql: true
  })
);
app.listen(3000, () => console.log("corriendo express con graphql"));
