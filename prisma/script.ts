import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

/**
 * @description can put log into the PrismaClient
 */
//   {
//   log: ["query"],
// }
async function main() {
  /**
   * @description delete ways
   */
  // await prisma.user.deleteMany();
  /*
  const userDelete = await prisma.user.deleteMany({
    where: {
      age: { gt: 30 },
    },
  });
  console.log("userDelete", userDelete);
   */
  // const preference = await prisma.userPreference.create({
  //   data: {
  //     emailUpdates: true,
  //   },
  // });
  // console.log(preference);
  /**
   * @description how to update
   */
  /* 
  const userUpdate = await prisma.user.update({
    where: {
      email: "NoJayAnymore@test.com",
    },
    data: {
      // email: "NoJayAnymore@test.com",
      userPreference: {
        connect: {
          id: "c122ca07-4abd-4d48-9d85-00d7181c03b6",
        },
        // create: {
        //   emailUpdates: true,
        // },
      },
    },
  });
   */
  // console.log("userUpdate", userUpdate);

  /**
   * @description how to find with many conditions
   */
  const user = await prisma.user.findMany({
    where: {
      /*
writtenPosts: {
        // some, none
        every: {
          // createdAt: new Date(),
          title: "Test",
        },
      },
       */
      // email: {
      //   contains: "@test.com",
      //   startsWith: "J",
      //   endsWith: "com",
      // },
      // AND: [
      //   {
      //     email: { startsWith: "J" },
      //     name: { endsWith: "y" },
      //   },
      // ],
      // OR: [
      //   {
      //     name: "Jay",
      //   },
      //   { name: "Mindy" },
      //   {
      //     age: {
      //       gt: 30,
      //     },
      //   },
      // ],
      // name: "Jay",
      // age: { lt: 34 },
    },
    /**
     * @description pagination!
     */
    take: 3,
    skip: 0,
    orderBy: {
      age: "desc",
    },
    // distinct: ["name", "age"],
  });
  // const user = await prisma.user.findFirst({
  //   where: {
  //     name: "Jay",
  //   },
  // });
  /* 
  const user = await prisma.user.findUnique({
    where: {
      // email: "jay@test.com",
      age_name: {
        age: 31,
        name: "Jay",
      },
    },
  });
  */
  /**
   * @description how to create many with array
   */
  /* create many users using array
  await prisma.user.createMany({
    data: [
      {
        name: "Jay",
        email: "Jay1@test.com",
        age: 31,
      },
      {
        name: "Jay",
        email: "Jay2@test.com",
        age: 34,
      },
      {
        name: "Jay",
        email: "Jay3@test11.com",
        age: 40,
      },
      {
        name: "Mindy",
        email: "Mindy@test.com",
        age: 20,
      },
    ],
    // select: {
    //   name: true,
    //   userPreference: { select: { id: true } },
    // },
    // include: {
    //   userPreference: true,
    // },
  });
   */
  console.log(user);
}

main()
  .catch((e) => {
    console.error(e.message);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
