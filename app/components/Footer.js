// import Link from 'next/link';

const Footer = () => {
  return (
    <div className='justify-center bg-transparent rounded-t-xl border-2 border-blue-400 shadow-2xl w-full'>
        <div className='flex gap-x-2 md:gap-x-6 text-sm md:text-xl p-5 justify-center  items-center'>
      
      {/* <div className=" flex gap-2 md:gap-4 md:m-7 justify-center items-center text-xs md:text-xl font-bold border-2 border-yellow-600 rounded-xl  py-5 mb-4 mx-auto"> */}
  
  <h3 className="text-blue-600 font-bold text-2xl">Saleh Khatab </h3>  
  <p className="text-blue-400 font-bold"> Tel: +201098585455</p>  
  <p className="text-blue-400 font-bold"> Email: salehkhtab@gmail.com</p>  
    </div>
    <div><p className='text-xs text-center text-gray-300'>Designed and developed by Ayman Aly</p></div>
    </div>
  );
}

export default Footer;
