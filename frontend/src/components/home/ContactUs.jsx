export const ContactUs = () => {
  return (
    <section className="bg-gray-100">
      <div className="flex  p-10 w-[90%] m-auto items-start justify-between">
        <div className="w-1/3">
          <h2 className="text-xl text-purple-400">
            Better futures, begin with Pranish.
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
            voluptatem sequi voluptatum dolorem doloremque nesciunt aliquam id,
            culpa iure maxime expedita mollitia, alias nulla, necessitatibus
            perspiciatis vero quisquam! Temporibus, molestias maiores!
            Temporibus nostrum error rem vero reiciendis rerum ratione autem.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus
            doloremque aperiam modi omnis. Maxime quos rem suscipit minus
            asperiores excepturi!
          </p>
        </div>
        <div className="">
          <h3 className="bold text-xl">
            Turn your study Abroad Dream to Degrees abroad
          </h3>
          <form action="" className="flex flex-col items-start gap-3">
            <input
              type="text"
              placeholder="Name"
              className="w-full  p-2 rounded-xl"
            />
            <input
              type="text"
              placeholder="Email"
              className="w-full p-2 rounded-xl"
            />
            <div className="flex gap-3 w-full">
              <input
                type="number"
                placeholder="+977"
                className="w-[20%] p-2 rounded-xl"
              />
              <input
                type="number"
                placeholder="mobile number"
                className=" w-[100%] p-2 rounded-xl"
              />
            </div>
            <div>
              <input type="checkbox" id="checkbox" />
              <label htmlFor="checkbox" className="inline pl-2">
                By clicking you are agreeing to our private policy and terms and
                conditions
              </label>
            </div>

            <button className="rounded-3xl bg-primary text-white px-3 py-2 ">
              Get started for free
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
