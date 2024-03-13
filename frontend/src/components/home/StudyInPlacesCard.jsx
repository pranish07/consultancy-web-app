import propTypes from "prop-types"
import {NavLink} from "react-router-dom"
export const StudyInPlacesCard = ({image,country}) => {
  return (
    <div className="rounded-xl shadow-md w-full text-left transition-all duration-300 ease-in-out delay-100 hover:shadow-2xl hover:cursor-pointer ">
        <img className="rounded-tl-xl rounded-tr-xl bg-cover bg-center w-full" src={image} alt="" />
        <p className="pl-3 py-2">Study in {country}</p>
        <small className="pl-3 pb-2 block text-blue-800"><NavLink to={`studyin${country}`}> Learn more &gt; </NavLink> </small>
    </div>
  )
}
StudyInPlacesCard.propTypes={
image: propTypes.string,
country:propTypes.string,
}
