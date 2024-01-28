export const ContactUs = () => {
  return (
    <section className="flex bg-gray-100 p-10 items-start">
      <div className="w-2/3">
        <h2 className="text-xl text-purple-400">Better futures, begin with Pranish.</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
          voluptatem sequi voluptatum dolorem doloremque nesciunt aliquam id,
          culpa iure maxime expedita mollitia, alias nulla, necessitatibus
          perspiciatis vero quisquam! Temporibus, molestias maiores! Temporibus
          nostrum error rem vero reiciendis rerum ratione autem.
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus
          doloremque aperiam modi omnis. Maxime quos rem suscipit minus
          asperiores excepturi!
        </p>
      </div>
      <div className="">
        <h3>Turn your study Abroad Dream to Degrees abroad</h3>
        <form action="" className="flex flex-col items-start">
          <input type="text" placeholder="Name" className="w-full my-2 p-2"/>
          <input type="text" placeholder="Email" className="w-full my-2 p-2" />
          <input type="number" placeholder="mobile number" className="w-full my-2 p-2" />
          <input type="checkbox" id="checkbox" />
          <label htmlFor="checkbox" className="inline">By clicking you are agreeing to our private policy and terms and
          conditions</label>
         
          
          <button className="rounded-3xl bg-blue-200 p-2 py-2">
            Get started for free
          </button>
        </form>
      </div>
    </section>
  );
};
