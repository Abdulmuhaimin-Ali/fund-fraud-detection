
const Rating = () => {
    const value = .75;

    return (
    <div className = "text-black">
        <h2 className="text-lg font-semibold mb-2">Rating</h2>
        <div className="border-2 border-black h-4 w-full rounded-full">   
            <div className = "percentage h-3 w-full rounded-full  bg-gradient-to-r from-[#f8764a] to-[#03b231] mb-2" style={{ width: `${value * 100}%` }}
            ></div>
        </div>

        <div className="flex items-center justify-between text-sm">
        <span className="font-medium"></span>
          <span className="font-medium">Rating: {value * 100}</span>
        </div>
      </div> )
}


export default Rating;




