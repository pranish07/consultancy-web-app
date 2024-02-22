import { StudyInPlacesCard } from "./StudyInPlacesCard";

export const WhereYouWantToGo = () => {
  const dataOfPlaces = [
    {
      id: "1",
      image:
        "https://www.aeccglobal.com.np/images/2023/08/14/usa-3.webp",
      country: "USA",
    },
    {
      id: "2",
      image:
        "https://www.aeccglobal.com.np/images/2023/08/14/australia-13.webp",
      country: "Australia",
    },
    {
      id: "3",
      image:
        "https://www.aeccglobal.com.np/images/2023/08/14/new-zealand.webp",
      country: "New Zealand ",
    },
    {
      id: "4",
      image:
        "https://www.aeccglobal.com.np/images/2023/08/18/shutterstock_1483667474-2-1.webp",
      country: "Europe",
    },
    {
      id: "5",
      image:
        "https://www.aeccglobal.com.np/images/2023/08/14/canada-4.webp",
      country: "Canada",
    },
    {
      id: "6",
      image:
        "https://www.aeccglobal.com.np/images/2023/08/14/uk-5.webp",
      country: "uk",
    },
  ];
  return (
    <div className="text-center my-10">
      <h3 className="text-2xl my-2">
        {" "}
        Wherever you want to go, We&apos;ll get you there
      </h3>
      <p className="text-sm my-2 w-1/2 m-auto mb-8">
        Explore the best study destinations in the world! Learn all about the
        countries&apos; top universities, scholarships, cost of living,
        post-study work rights and more
      </p>
      <section className="w-[90%] m-auto">
        <div className="grid md:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 justify-items-center gap-8">
          {dataOfPlaces.map((item) => (
            <StudyInPlacesCard
              key={item.id}
              image={item.image}
              country={item.country}
            />
          ))}
        </div>
      </section>
    </div>
  );
};
