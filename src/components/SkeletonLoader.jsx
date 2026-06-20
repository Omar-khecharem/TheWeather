const SkeletonBar = ({ className = "" }) => (
  <div className={`animate-pulse bg-gray-200 rounded ${className}`} />
);

const SkeletonLoader = () => {
  return (
    <div className="space-y-5 animate-fadeIn">
      <div className="rounded-2xl bg-white border border-gray-200/80 shadow-sm p-6 md:p-8">
        <div className="flex items-center gap-2.5 mb-6">
          <SkeletonBar className="w-4 h-4" />
          <SkeletonBar className="w-32 h-5" />
          <SkeletonBar className="w-12 h-4" />
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-6">
          <div className="flex-1 w-full">
            <div className="flex items-center justify-center lg:justify-start gap-4 mb-3">
              <SkeletonBar className="w-20 h-20 rounded-full" />
              <SkeletonBar className="w-36 h-16" />
            </div>
            <SkeletonBar className="w-24 h-4 mx-auto lg:mx-0 mb-4" />
            <div className="flex items-center justify-center lg:justify-start gap-4">
              <SkeletonBar className="w-16 h-4" />
              <SkeletonBar className="w-4 h-4" />
              <SkeletonBar className="w-16 h-4" />
              <SkeletonBar className="w-4 h-4" />
              <SkeletonBar className="w-24 h-4" />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3 w-full lg:w-auto">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="px-4 py-3 rounded-xl bg-gray-50 border border-gray-100">
                <SkeletonBar className="w-12 h-3 mx-auto mb-2" />
                <SkeletonBar className="w-10 h-5 mx-auto" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="rounded-2xl bg-white border border-gray-200/80 shadow-sm p-5">
        <SkeletonBar className="w-28 h-3 mb-4" />
        <div className="flex gap-3">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex-shrink-0 w-24 rounded-xl bg-gray-50 border border-gray-100 p-3.5">
              <SkeletonBar className="w-10 h-3 mx-auto mb-3" />
              <SkeletonBar className="w-8 h-8 mx-auto rounded-full mb-2" />
              <SkeletonBar className="w-8 h-4 mx-auto" />
              <SkeletonBar className="w-10 h-2 mx-auto mt-1" />
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-2xl bg-white border border-gray-200/80 shadow-sm p-5">
        <SkeletonBar className="w-28 h-3 mb-4" />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3">
          {[...Array(7)].map((_, i) => (
            <div key={i} className="rounded-xl bg-gray-50 border border-gray-100 p-4">
              <SkeletonBar className="w-10 h-3 mx-auto mb-1" />
              <SkeletonBar className="w-12 h-2 mx-auto mb-3" />
              <SkeletonBar className="w-9 h-9 mx-auto rounded-full mb-2" />
              <SkeletonBar className="w-12 h-4 mx-auto" />
              <SkeletonBar className="w-10 h-2 mx-auto mt-1" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkeletonLoader;
