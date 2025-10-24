const Loader = () => {
  return (
    <div className="w-full h-[100vh] flex items-center  justify-center fixed bg-[rgba(255,255,255,0.1)] backdrop-blur-2xl top-0 left-0 right-0 bottom-0 z-50">
      <div
        className="relative mt-[-48px] h-[64px] w-[96px] 
                 [transform-style:preserve-3d] 
                 [transform-origin:center] 
                 [transform:rotateX(60deg)_rotateZ(45deg)_rotateY(0deg)_translateZ(0px)]"
      >
        {/* box 1 */}
        <div className="absolute top-0 left-0 h-[32px] w-[32px] [transform-style:preserve-3d] animate-[box1_800ms_linear_infinite]">
          <div className="absolute top-0 left-0 h-full w-full bg-[#dec39a] [transform:translateZ(16px)]" />
          <div className="absolute right-0 h-full w-full bg-[#b8905d] [transform:rotateY(90deg)_translateZ(16px)]" />
          <div className="absolute h-full w-full bg-[#efd8b7] [transform:rotateX(-90deg)_translateZ(16px)]" />
          <div className="absolute top-0 left-0 h-full w-full bg-[#f7ede2] [transform:translateZ(-96px)]" />
        </div>

        {/* box 2 */}
        <div className="absolute top-0 left-0 h-[32px] w-[32px] [transform-style:preserve-3d] animate-[box2_800ms_linear_infinite]">
          <div className="absolute top-0 left-0 h-full w-full bg-[#dec39a] [transform:translateZ(16px)]" />
          <div className="absolute right-0 h-full w-full bg-[#b8905d] [transform:rotateY(90deg)_translateZ(16px)]" />
          <div className="absolute h-full w-full bg-[#efd8b7] [transform:rotateX(-90deg)_translateZ(16px)]" />
          <div className="absolute top-0 left-0 h-full w-full bg-[#f7ede2] [transform:translateZ(-96px)]" />
        </div>

        {/* box 3 */}
        <div className="absolute top-0 left-0 h-[32px] w-[32px] [transform-style:preserve-3d] animate-[box3_800ms_linear_infinite]">
          <div className="absolute top-0 left-0 h-full w-full bg-[#dec39a] [transform:translateZ(16px)]" />
          <div className="absolute right-0 h-full w-full bg-[#b8905d] [transform:rotateY(90deg)_translateZ(16px)]" />
          <div className="absolute h-full w-full bg-[#efd8b7] [transform:rotateX(-90deg)_translateZ(16px)]" />
          <div className="absolute top-0 left-0 h-full w-full bg-[#f7ede2] [transform:translateZ(-96px)]" />
        </div>

        {/* box 4 */}
        <div className="absolute top-0 left-0 h-[32px] w-[32px] [transform-style:preserve-3d] animate-[box4_800ms_linear_infinite]">
          <div className="absolute top-0 left-0 h-full w-full bg-[#dec39a] [transform:translateZ(16px)]" />
          <div className="absolute right-0 h-full w-full bg-[#b8905d] [transform:rotateY(90deg)_translateZ(16px)]" />
          <div className="absolute h-full w-full bg-[#efd8b7] [transform:rotateX(-90deg)_translateZ(16px)]" />
          <div className="absolute top-0 left-0 h-full w-full bg-[#f7ede2] [transform:translateZ(-96px)]" />
        </div>
      </div>
    </div>
  );
};

export default Loader;
