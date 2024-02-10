import propTypes from "prop-types"

export const StudyInPlacesCard = ({image,country}) => {
  console.log(image,country)
  return (
    <div className="rounded-xl shadow-xl w-full text-left ">
        <img className="rounded-tl-xl rounded-tr-xl" src={image} alt="" />
        <p className="pl-2 py-2">Study in {country}</p>
        <small className="pl-2 pb-2 block">Learn more  </small>
    </div>
  )
}
StudyInPlacesCard.propTypes={
image: propTypes.string,
country:propTypes.string,
}
