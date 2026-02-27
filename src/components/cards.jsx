
  function Card({ id, name, href, imageSrc, imageAlt, price, color }) {
  return (
    <div key={id} className="group relative flex flex-col items-center">
      <img
        alt={imageAlt}
        src={imageSrc}
        className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
      />

      <div className="mt-4 flex flex-col items-center w-full">
        <h3 className="text-sm text-gray-700 text-center">
          <a href={href}>
            <span aria-hidden="true" className="absolute inset-0" />
            {name}
          </a>
        </h3>
        <p className="mt-1 text-sm text-gray-500 text-center">{color}</p>
        <div className="flex flex-col items-center space-y-2 mt-2">
          <p className="text-sm font-medium text-gray-900 text-center">{price}</p>
          <button className="px-1.5 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}
  
export default Card;