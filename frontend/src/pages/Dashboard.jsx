export default function Dashboard() {
  return (
    <div className="relative min-h-screen w-full">
      {/* Background Image */}
      <img
        src="https://dnm.nflximg.net/api/v6/BvVbc2Wxr2w6QuoANoSpJKEIWjQ/AAAAQUq_sj3y88nqrcBnRm69rS7xur65HYgLkCS5MxHbA-7Dvd72b3Mek4eoiDb5Rb4-dzpaJz260toRGHQIeKdtAvUxWmmk5hio-pquv_pTESDyz5XQuv6K0vlqFQvsPXGuMA0OfA7q27_8cBy9ds-8RroPX1Y.jpg?r=9d3"
        alt="Dashboard Background"
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />
      
      {/* Dark Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60 z-10" />

      {/* Content */}
      <div className="relative z-20 flex items-center justify-center min-h-screen text-white text-3xl font-bold">
       🎉Welcome to the Dashboard!
      </div>
    </div>
  );
}
