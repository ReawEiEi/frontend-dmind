import Heart from "./Heart";

export default function Result({ level }: { level: string }) {
  const isLow = level === "LOW";
  return (
    <div className="flex flex-col items-center rounded-2xl bg-tranparent px-5 py-4 w-[100%] mb-3 shadow">
      <div
        className={`flex flex-col items-center ${
          isLow ? "bg-green-100" : "bg-red-100"
        } w-[99%] px-12 py-2 gap-y-4 rounded-lg`}
      >
        <div className="mt-2 text-base lg:text-xl text-stone-600">
          ความเสี่ยงโรคซึมเศร้าระดับ
        </div>
        <div
          className={`${
            isLow ? "bg-green-400" : "bg-red-400"
          } py-2 px-2 text-gray-200 rounded-full`}
        >
          {isLow ? "ต่ำ" : "รุนแรง"}
        </div>
        <div className="relative w-[100%]">
          <div className="flex relative items-center drop-shadow-lg">
            <div className="h-4 bg-gradient-to-r from-green-300 to-yellow-300 w-[100%] rounded-l-lg"></div>
            <div className="h-4 bg-gradient-to-r from-yellow-300 to-red-300 w-[100%] rounded-r-lg"></div>
            <Heart isLow={isLow} />
          </div>
        </div>

        <div className="flex justify-between text-xs text-gray-400 w-[100%]">
          <div>ต่ำ</div>
          <div>ปานกลาง</div>
          <div>รุนแรง</div>
        </div>
      </div>

      {isLow ? (
        <div className="my-2 flex flex-col items-center text-green-400 text-xs md:text-sm lg:text-base">
          <div>เยี่ยมมากเลย</div>
          <div>หมั่นดูแลจิตใจให้แข็งแรงแบบนี้เสมอนะ</div>
          <div>อยากพูดคุยกันเมื่อไร มาหาหมอได้เสมอ</div>
        </div>
      ) : (
        <div className="mt-6 mb-2 flex flex-col items-center text-red-400 text-xs md:text-sm lg:text-base">
          <div>หมอขอข้อมูลเพื่อให้เจ้าหน้าที่ติดต่อกลับไป</div>
          <div>โดยจะได้รับการติดต่อกลับภายใน 24 ชั่วโมงนะคะ</div>
        </div>
      )}
    </div>
  );
}
