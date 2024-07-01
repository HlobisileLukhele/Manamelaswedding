

const Accommodation = () => {
    return (
        <>
        <div className="container md:mx-auto bg-black "> 
        <h1 className="pt-2">Accommodation</h1>
        <div className="columns-2 mb-8">
        <div className="items-center">
        <p className="text-2x color-white ">The wedding venue hs accomodation that &apos dependent on availability. Kindly click here to have a view and book</p>
        <button>Book Accomodation</button>
        </div>
        <div className="items-center">
        <p className="text-2x color-white ">Alternatively you cann book on AirBnB at any place near or surrounding the venue. </p>
        <button>
            <a href="https://www.rosemaryhill.co.za/accommodation/" target="_blank">
            Book Accomodation
             </a>
            </button>
        </div>
        </div>
        <p>Kindly arrange for personal transport as there's no public transport available to and from the venue.
           There's a tollagte at N4(Donkerhoek Boschkop),as you off-ramp into the dirt road leading to the farm.
           Kindly ensure you have cash or card  that swipes or taps, It's about R20.
        </p>
        </div>
        </>
    )
}

export default Accommodation;
