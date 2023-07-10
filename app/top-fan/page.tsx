"use client";
import Image from "next/image";
import { useEffect } from "react";
import useStore from "../../utils/navbar";
import { shallow } from "zustand/shallow";
import { PrismaClient, TopFan } from "@prisma/client";
import fetchTopFan from "@/helper";
import TopFanData from "@/components/top-fan-data";

// React Library - tremor
// Icons - Hero Icons

export default function TopFan() {
  const [focus, updateFocus] = useStore(
    (state) => [state.focus, state.updateFocus],
    shallow
  );
  useEffect(() => {
    if (focus !== "Top Fan") {
      updateFocus("Top Fan");
    }
  }, []);

  const topFanClass: string =
    "w-full flex flex-col items-center justify-center my-5 px-10 sm:w-[400px]";
  return (
    <main className="md:pt-16 grid grid-cols-1 sm:grid-cols-2 items-center justify-items-center lg:grid-cols-3">
      <section className={topFanClass}>
        <TopFanData />
        <Image
          src="/pogi.svg"
          alt="the most handsome person in the world"
          width={90}
          height={90}
          className="my-5 w-auto h-auto grid-cols"
        />
        <h3 className="text-2xl font-bold text-center">Daniel Rey</h3>
        <p className="text-center my-2 text-sm">
          Top fan since 06/06/2023, thank you for supporting the pagefrom the
          bottom of our heart.
        </p>
        <p className="text-center text-sm">June 6, 2023</p>
      </section>
    </main>
  );
}
