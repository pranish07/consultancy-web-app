export const WhoWeAre = () => {
  return (
    <section className="w-[90%] m-auto">
      <div className="flex my-6 justify-center items-center">
        <div className="w-[50%] flex flex-col gap-4">
          <h2 className="text-3xl">
            Guiding your every step in international education
          </h2>
          <p>
            At AECC Global, all our team members are highly experienced in
            international tertiary study and hold appropriate qualifications for
            effective education counselling. 
          </p>
          <p>We work on your behalf as an
            independent representatives of over 500+ top universities and
            educational institutions across the globe that we’ve vetted, giving
            you a wide range of choices backed by an intimate knowledge of each
            institution</p>
        </div>
        <div className="">
          <img
            src="https://www.aeccglobal.com.np/images/2021/03/18/4.webp"
            alt=""
            className="w-[80%]"
          />
        </div>
      </div>
      <div className="flex mb-9 justify-center items-center">
        <div>
          <img
            src="https://www.aeccglobal.com.np/images/2021/03/18/3.webp"
            alt=""
          />
        </div>
        <div className="w-[50%] flex flex-col gap-4 items-start">
          <h2 className="text-3xl">Our experience and partnerships will help you go a long way</h2>
          <p>
            Since 2008, we&apos;ve been helping students from all around the world to
            realise their dreams of studying abroad and have the industry
            partnerships and local know-how to help you get setup with things
            like banking, insurance, accommodation and more. Here’s just some of
            our professional memberships and partnerships:
          </p>

          <img
            src="https://www.aeccglobal.com.np/images/page-images/pro-members-5.webp"
            alt="" className="w-1/2"
          />
          <p className="text-lg font-bold">Industry Partners</p>
          <img
            src="https://www.aeccglobal.com.np/images/page-images/img-wwa-partners.webp"
            alt="" className="w-1/2"
          />
          <button className="rounded-3xl bg-primary text-white px-5 py-2">SPEAK WITH US TODAY</button>
        </div>
      </div>
    </section>
  );
};
