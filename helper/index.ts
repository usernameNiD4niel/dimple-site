import { PrismaClient } from "@prisma/client";

export default async function fetchTopFan(): Promise<Test[]> {
    const prisma = new PrismaClient();
    const topFan = await prisma.topFan.findMany();
    // const topFan = prisma.topFan.create({
    //   data: {
    //     name: "Chona Mae",
    //     description: "This is my description",
    //     image_url:
    //       "https://lh3.googleusercontent.com/a/AAcHTtf1AlEx5jfnA_FduqJdGh7UgT2eZw9TkOVb0Zo_7ddmUg=s288-c-no",
    //   },
    // });
    return topFan;
}

type Test = {
    name: string
}