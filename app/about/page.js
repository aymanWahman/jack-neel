import Image from "next/image";


const Page = () => {
  return (
    <>
      <div className="grid md:grid-cols-3 gap-2 p-5 rounded-xl items-center text-center mt-32">

        <div className=" rounded-xl">
          <Image
            className="rounded-xl shadow-2xl shadow-black w-full"
            src="/image/saleh.jpg"
            alt="Logo"
            width={360}
            height={130}
            priority
          />
          <h2 className="p-3 font-bold text-3xl">Saleh Khtab</h2>
        </div>


        <div className="col-span-2 w-full py-16 rounded-xl space-y-4 border-2 border-blue-400">
        
          <h2 className="text-2xl md:text-6xl font-bold mb-9 text-blue-200">Jack Neel</h2>
          <p className="text-xl md:text-2xl">Welcom to our country</p>
        
        </div>

      </div>

    </>
  );
};

export default Page;
