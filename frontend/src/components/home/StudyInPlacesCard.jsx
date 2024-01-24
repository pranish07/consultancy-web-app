import propTypes from "prop-types"

export const StudyInPlacesCard = ({image,country}) => {
  console.log(image,country)
  return (
    <div className="rounded-xl shadow-xl w-full">
        <img className="rounded-tl-xl rounded-tr-xl" src={image} alt="" />
        <p>Study in {country}</p>
        <small>Learn more  </small>
    </div>
  )
}
StudyInPlacesCard.propTypes={
image: propTypes.string,
country:propTypes.string,
}
