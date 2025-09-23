import { useEffect, useState } from "react";

const DiscountTimer = () => {

  const TargetDate = new Date().getTime() + (1000 * 60 * 60 * 24 * 25);

  const getTimeRemaining = () => {
    const now = new Date().getTime();
    const diff = TargetDate - now;

    return {
      days: Math.floor( diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor( (diff / (1000 * 60 * 60)) % 24 ),
      minuit: Math.floor( (diff / (1000 * 60)) % 60 ),
      second: Math.floor( (diff / 1000) % 60 ),
    }
  };

  const [TimeLeft, setTimeLeft] = useState( getTimeRemaining() );

  useEffect(() => {
    const timer = setInterval( () => {
      setTimeLeft(getTimeRemaining());
    }, 1000);

    return () => clearInterval(timer);

  }, []);

  return (
    <div className="my-6">
      <div className="flex items-center justify-center md:justify-start gap-5 md:gap-10">
        <div>
          <h2 className="font-semibold text-4xl md:text-5xl text-pink-500">{TimeLeft.days}</h2>
          <h2 className="font-semibold text-2xl md:text-3xl">Days</h2>
        </div>
        <div>
          <h2 className="font-semibold text-4xl md:text-5xl text-pink-500">{TimeLeft.hours}</h2>
          <h2 className="font-semibold text-2xl md:text-3xl">Hrs</h2>
        </div>
        <div>
          <h2 className="font-semibold text-4xl md:text-5xl text-pink-500">{TimeLeft.minuit}</h2>
          <h2 className="font-semibold text-2xl md:text-3xl">Min</h2>
        </div>
        <div>
          <h2 className="font-semibold text-4xl md:text-5xl text-pink-500">{TimeLeft.second}</h2>
          <h2 className="font-semibold text-2xl md:text-3xl">Sec</h2>
        </div>
      </div>
    </div>
  );
};

export default DiscountTimer;