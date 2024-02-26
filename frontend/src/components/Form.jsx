export const Form = () => {
  return (
    <div className="shadow-2xl bg-white rounded-xl py-3 ">
      <h2 className="text-primary text-xl font-bold p-3">Turn Your Study Abroad Dream to Degrees Abroad </h2>
      <form action="" className=" py-4 px-4">
      <input type="text" placeholder="Name" className="w-full border border-purple-500 p-2 rounded-xl my-2"/>
      <input type="text" placeholder="Email" className="w-full border border-purple-500 p-2 rounded-xl my-2"/>
      <div className="flex gap-4">
      <input type="text" placeholder="+977" className="w-[20%] border p-2 border-purple-500 rounded-xl my-2"/>
      <input type="text" placeholder="Mobile Number" className="w-[75%] border border-purple-500 p-2 rounded-xl my-2"/>
      </div>
      <input type="text" placeholder="Nearest Office " className="w-full border border-purple-500 p-2 rounded-xl my-2"/>
      <input type="text" placeholder="Prefered study Destination" className="w-full border-purple-500 border p-2 rounded-xl my-2"/>
      <input type="text" placeholder="Preferred Study Year" className="w-full border border-purple-500 p-2 rounded-xl my-2"/>
     <div className="my-2">
      <input type="checkbox" /> By clicking you agree to our Privacy Policy and
      Terms & Conditions
      </div>
      <button className="bg-primary text-white font-bold px-5 py-2 rounded-full">Get Started for Free</button>
      </form>
    </div>
  );
};
