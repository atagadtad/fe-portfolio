const Courses = () => {
  return (
    <div className="container sm: mx-auto min-w-full h-full">
      <div className="grid grid-cols-2 md:grid-cols-3 h-full">
        <div className="bg-gray-400 col-span-2 md:col-span-1 h-full">
          <div className="flex block justify-center mt-5 font-bold text-gray-800 text-3xl">
            <h1>Courses</h1>
          </div>
        </div>
        <div className="bg-gray-600 col-span-2 md:col-span-2 h-full"></div>
      </div>
    </div>
  );
};

export default Courses;
