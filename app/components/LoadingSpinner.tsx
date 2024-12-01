const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
      <span className="loading loading-dots loading-lg text-yellow-500"></span>
    </div>
  );
};

export default LoadingSpinner;
