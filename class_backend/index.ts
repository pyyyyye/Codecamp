import { createConnection } from "typeorm";
import { ApolloServer, gql } from "apollo-server";
import Board from "./Board.postgres";

const typeDefs = gql`
  input UpdateBoardInput {
    writer: String
    title: String
    age: Int
  }
  input CreateProductInput {
    name: String
    detail: String
    price: Int
  }
  input UpdateProductInput{
    name: String
    detail:String
    price:Int
  }
  type Board {
    number: Int
    writer: String
    title: String
    age: Int
  }
  type Query {
    fetchBoard(number: Int!): Board
    fetchBoards: [Board]
    fetchProduct(productId: ID!): Product
    fetchProducts: [Product]
  }
  type Mutation 
    createBoard(writer: String!, title: String!, age: Int!): Boolean
    updateBoard(number: Int!, updateBoardInput: UpdateBoardInput!): Boolean
    deleteBoard(number: Int!): Boolean
    createProduct(seller: String!, createProductInput:CreateProductInput!): Boolean
    updateProduct(productId:ID, updateProductInput:UpdateProductInput!) : Boolean
  }
`;

const resolvers = {
  Query: {
    fetchBoard: (_: any, args: any) => {
      return Board.findOne({ where: { number: args.number, deletedAt: null } });
    },
    fetchBoards: () => {
      return Board.find({ where: { deletedAt: null } });
    },
    //******* homework ------------------********/
    fetchProduct: (_: any, args: any) => {
      return Board.findOne({ where: { name: args.number, createdAt: null } });
    },
    fetchProducts: () => {
      return Board.find({ where: { createdAt: null } });
    },
  },
  Mutation: {
    createBoard: async (_: any, args: any) => {
      try {
        await Board.insert({
          writer: args.writer,
          title: args.title,
          age: args.age,
        });
      } catch (error) {
        console.log(error.message);
      }
      return true;
    },

    updateBoard: (_: any, args: any) => {
      Board.update(
        { number: args.number },
        {
          writer: args.updateBoardInput.writer,
          title: args.updateBoardInput.title,
          age: args.updateBoardInput.age,
        }
      );
      return true;
    },
    deleteBoard: (_: any, args: any) => {
      Board.update({ number: args.number }, { deletedAt: new Date() });
      return true;
    },
    createProduct: async (_: any, args: any) => {
      try {
        await Board.insert({
          // seller??? ????????? ??????..?
          name: args.name,
          detail: args.detail,
          price: args.price,
        });
      } catch (error) {
        console.log(error.message);
      }
      return true;
    },
    updateProduct: () => {
      Board.update({});
    },
  },
};

const server = new ApolloServer({
  typeDefs: typeDefs,
  resolvers: resolvers,
});

createConnection({
  //!----- ???????????? ????????????????????? ??? ?????? ?????? ???????????? !!!!
  type: "postgres",
  database: "postgres",
  username: "postgres",
  password: "postgres2021",
  port: 5007,
  host: "34.64.71.71", //='db.example.codebootcamp.co.kr'???ip??????
  entities: [__dirname + "/*.postgres.ts"],
  logging: true,
  synchronize: true,
}).then(() => {
  //!----- ?????? ?????? ??? ?????? !!!!
  console.log("????????????!!");
  server.listen({ port: 4000 });
});
