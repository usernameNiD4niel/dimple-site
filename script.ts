import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    // const topFan = await prisma.topFan.create({
    //     data: {
    //         name: "Daniel Rey",
    //         description: "Hello this is just a sample description for this video",
    //         image_url: "https://lh3.googleusercontent.com/a/AAcHTtf1AlEx5jfnA_FduqJdGh7UgT2eZw9TkOVb0Zo_7ddmUg=s288-c-no"
    //     }
    // });

    const topFan = await prisma.topFan.findMany();

    console.log(topFan);

}

main()
    .then(async (e) => {
        console.log(e);
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.log(`Error ka beh: ${e}`);
        await prisma.$disconnect();
        process.exit(1);
    })