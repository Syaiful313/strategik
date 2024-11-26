
const marquee = () => {
    const texts: string[] = [
        "GET STRATEGIK",
        "GET STRATEGIK",
        "GET STRATEGIK",
        "GET STRATEGIK",
        "GET STRATEGIK",
        "GET STRATEGIK",
        "GET STRATEGIK",
        "GET STRATEGIK",
        "GET STRATEGIK",
      ];
    
      return (
        <div className="overflow-hidden whitespace-nowrap w-full relative bg-[#e33a07] h-16 py-4">
          <div className="flex animate-marquee">
            {[...texts, ...texts].map((text, index) => (
              <span key={index} className="inline-block mx-4 text-3xl font-semibold">
                {text}
              </span>
            ))}
          </div>
        </div>
      );
    };


export default marquee