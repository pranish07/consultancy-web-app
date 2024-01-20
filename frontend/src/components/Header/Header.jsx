
export const Header = () => {
  return (
    <div className="relative">
        <img src="https://www.idp.com/medias/Aus-VF-banner-Feb.jpg?context=bWFzdGVyfHJvb3R8Nzc4MjB8aW1hZ2UvanBlZ3xhRGt6TDJoa01TOHhNVEk1TVRRNE1ETTVNVGN4TUM5QmRYTXRWa1l0WW1GdWJtVnlMVVpsWWk1cWNHY3w0NmQ5NmZjYmVhMzRjZTJhNzc4NmUzODIzMDVmNjI4ZDBiMTM2YTVlNzg1OTk3NjEwODEwMjY3N2MxZmQ0NmNj" alt="" />

        <div className="absolute top-3 text-white left-20 items-start flex flex-col gap-4"> 
          <h3 className="text-3xl font-bold">Study in Australia</h3>
          <p className="text-xl">Ready for an Aussie adventure? Apply for Feb/July 2024 intakes</p>
          <button className="bg-orange-500 rounded-full py-1 px-3 border-slate-500">Register Now</button>
        </div>
    </div>
  )
}
