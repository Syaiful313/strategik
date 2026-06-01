const marqueeTexts = Array.from({ length: 18 }, (_, index) => ({
  id: `marquee-${index}`,
  text: "GET STRATEGIK",
}));

const Marquee = () => {
  return (
    <div className="relative h-16 w-full overflow-hidden whitespace-nowrap bg-[#e33a07] py-4">
      <div className="flex animate-marquee">
        {marqueeTexts.map((item) => (
          <span
            key={item.id}
            className="mx-4 inline-block text-3xl font-semibold"
          >
            {item.text}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
