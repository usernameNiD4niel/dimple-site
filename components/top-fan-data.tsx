import Image from "next/image";

async function getData(): Promise<any> {
  const data = await fetch("http://localhost:3000/api");
  return data.json();
}

interface DataProps<TopFanData> {
  topfan: "top-fan";
}

type TopFanData = {
  id: number;
  name: string;
  description: string;
  image_url?: string;
  createdAt?: Date;
  updatedAt?: Date;
};

const TopFanData = async () => {
  const data = await getData();
  return (
    <div>
      <p>{data.topfan[0].id}</p>
      <p>{data.topfan[0].name}</p>
      <p>{data.topfan[0].description}</p>
    </div>
  );
};

export default TopFanData;
