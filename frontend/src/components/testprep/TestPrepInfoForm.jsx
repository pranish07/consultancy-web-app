export const TestPrepInfoForm = () => {
  return (
    <div className="flex flex-col justify-between items-start shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
      <label htmlFor="firstName">
        {" "}
        First Name *
        <input
          type="text"
          id="firstName"
          className="border border-black-500 rounded-2xl m-auto"
        />
      </label>
      <label htmlFor="firstName">
        {" "}
        Last Name *
        <input
          type="text"
          id="firstName"
          className="border border-black-500 rounded-2xl"
        />
      </label>
      <label htmlFor="firstName">
        {" "}
        Email: *
        <input
          type="text"
          id="firstName"
          className="border border-black-500 rounded-2xl"
        />
      </label>
      <label htmlFor="firstName">
        {" "}
        Mobile Number: *
        <input
          type="text"
          id="firstName"
          className="border border-black-500 rounded-2xl"
        />
      </label>
      <label htmlFor="firstName">
        {" "}
        Nearest Office: *
        <input
          type="text"
          id="firstName"
          className="border border-black-500 rounded-2xl"
        />
      </label>
      <label htmlFor="firstName">
        {" "}
        Test Preparation classes *
        <input
          type="text"
          id="firstName"
          className="border border-black-500 rounded-2xl"
        />
      </label>
      <label htmlFor="firstName">
        {" "}
        Preferred Study Destination *
        <input type="text" id="firstName" />
      </label>
      <div>
        <input type="checkbox" />
        Yes, I would like to receive information on study abroad news and events
        from aecc
      </div>
      <button>Submit</button>
    </div>
  );
};
