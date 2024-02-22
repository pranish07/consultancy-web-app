export const ContactUs = () => {
  return (
    <section className="bg-gray-100">
      <div className="large:flex  p-10 w-[90%] m-auto items-start justify-between">
        <div className="large:w-1/3">
          <h2 className="text-3xl text-purple-400">
            Better futures, begin with Pranish.
          </h2>
          <div className="flex flex-col gap-4">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
            voluptatem sequi voluptatum dolorem doloremque nesciunt aliquam id,
            culpa iure maxime expedita mollitia, alias nulla, necessitatibus
            perspiciatis vero quisquam! Temporibus, molestias maiores!
            Temporibus nostrum error 
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus
            doloremque aperiam modi omnis. Maxime quos rem suscipit minus
            asperiores excepturi!
          </p>
          </div>
        </div>
        <div className="max-large:mt-5">
          <h3 className="font-bold text-primary text-xl mb-4">
            Turn your study Abroad Dream to Degrees abroad
          </h3>
          <form action="" className="flex flex-col items-start gap-3">
            <input
              type="text"
              placeholder="Name"
              className="w-full  p-2 rounded-xl border border-purple-500"
            />
            <input
              type="text"
              placeholder="Email"
              className="w-full p-2 rounded-xl border border-purple-500"
            />
            <div className="flex gap-3 w-full">
              <input
                type="number"
                placeholder="+977"
                className="w-[20%] p-2 rounded-xl border border-purple-500"
              />
              <input
                type="number"
                placeholder="mobile number"
                className=" w-[100%] p-2 rounded-xl border border-purple-500"
              />
            </div>
            <div>
              <input type="checkbox" id="checkbox" />
              <label htmlFor="checkbox" className="inline pl-2">
                By clicking you are agreeing to our <span className="text-purple-500">Private Policy</span> and <span className="text-purple-500">Terms and
                Conditions</span>
              </label>
            </div>
            <div className="flex justify-center w-full">
            <button className="rounded-3xl bg-primary font-bold text-white px-3 py-2 ">
              Get started for free
            </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
