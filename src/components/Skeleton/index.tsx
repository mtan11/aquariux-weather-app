const Skeleton = () => {
  return (
    <div
      role="status"
      className="flex h-full animate-pulse flex-row items-center justify-center space-x-5"
    >
      <div className="h-full min-h-[360px] w-full min-w-[200px] bg-gray-300"></div>
    </div>
  );
};

export default Skeleton;
