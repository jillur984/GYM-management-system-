const SidebarFilter = () => {
  return (
    <aside className="w-full lg:w-1/4 bg-gray-800 p-4 text-white rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4">Filter Trainers</h2>
      <div className="mb-4">
        <label className="block mb-1">Specialization</label>
        <select className="w-full p-2 rounded bg-gray-700 text-white">
          <option>All</option>
          <option>Weight Training</option>
          <option>Yoga</option>
          <option>Cardio</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block mb-1">Experience</label>
        <input type="range" min="0" max="20" className="w-full" />
        <p className="text-sm mt-1">Years: 0 - 20</p>
      </div>
      <button className="bg-yellow-500 w-full py-2 mt-2 rounded-md text-black hover:bg-yellow-600 font-bold">
        Apply Filters
      </button>
    </aside>
  );
};

export default SidebarFilter;
