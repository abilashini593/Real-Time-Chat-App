const AuthImagePattern = () => {
  return (
    <div className="flex flex-col items-center justify-center px-8 py-12">
      {/* Grid Pattern */}
      <div className="grid grid-cols-3 gap-3 mb-6">
        {Array.from({ length: 9 }).map((_, index) => (
          <div
            key={index}
            className="w-20 h-20 rounded-xl bg-[#1E293B]" // Dark blue shade, or try bg-gray-800
          />
        ))}
      </div>

      {/* Text below the grid */}
      <h2 className="text-2xl font-semibold text-white mb-2">Join our community</h2>
      <p className="text-gray-400 text-center">
        Connect with friends, share moments, and stay in touch with your loved ones.
      </p>
    </div>
  );
};

export default AuthImagePattern;
