import propTypes from "prop-types"

export const StudyInPlacesCard = ({image,country}) => {
  return (
    <div className="rounded-xl shadow-xl w-full text-left ">
        <img className="rounded-tl-xl rounded-tr-xl bg-cover bg-center w-full" src={image} alt="" />
        <p className="pl-3 py-2">Study in {country}</p>
        <small className="pl-3 pb-2 block text-purple-500">Learn more &gt;  </small>
    </div>
  )
}
StudyInPlacesCard.propTypes={
image: propTypes.string,
country:propTypes.string,
}
