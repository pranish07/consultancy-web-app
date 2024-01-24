import { StudyInPlacesCard } from "./StudyInPlacesCard";

export const WhereYouWantToGo = () => {
  const dataOfPlaces = [
    {
      id: "1",
      image:
        "https://cdn.britannica.com/61/93061-050-99147DCE/Statue-of-Liberty-Island-New-York-Bay.jpg",
      country: "USA",
    },
    {
      id: "2",
      image:
        "https://cdn.britannica.com/61/93061-050-99147DCE/Statue-of-Liberty-Island-New-York-Bay.jpg",
      country: "Australia",
    },
    {
      id: "3",
      image:
        "https://cdn.britannica.com/61/93061-050-99147DCE/Statue-of-Liberty-Island-New-York-Bay.jpg",
      country: "Canada",
    },
    {
      id: "4",
      image:
        "https://cdn.britannica.com/61/93061-050-99147DCE/Statue-of-Liberty-Island-New-York-Bay.jpg",
      country: "USA",
    },
    {
      id: "5",
      image:
        "https://cdn.britannica.com/61/93061-050-99147DCE/Statue-of-Liberty-Island-New-York-Bay.jpg",
      country: "New zealand",
    },
    {
      id: "6",
      image:
        "https://cdn.britannica.com/61/93061-050-99147DCE/Statue-of-Liberty-Island-New-York-Bay.jpg",
      country: "Europe",
    },
  ];
  return (
    <div className="text-center">
      <h3 className="text-xl my-2">
        {" "}
        Wherever you want to go, We&apos;ll get you there
      </h3>
      <p className="text-sm my-2">
        Explore the best study destinations in the world! Learn all about the
        countries&apos; top universities, scholarships, cost of living,
        post-study work rights and more
      </p>
      <section className="w-[70%] m-auto">
        <div className="grid grid-cols-3 justify-items-center gap-2">
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
