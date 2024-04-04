import CircularWithValueLabel from "./CircularProcessWLabel";

export default function Loading() {
  const percentage = 66;
  return (
    <div className="flex items-center justify-center bg-neutral-400 w-[100vw] h-[100vh]">
      <div className="flex items-center justify-center bg-white rounded-2xl px-10 py-8 h-[30%] w-[80%] md:w-[55%] lg:w-[25%]">
        <div className="flex flex-col items-center">
          <CircularWithValueLabel />
          <p className="text-blue-600">กำลังประมวลผล</p>
        </div>
      </div>
    </div>
  );
}
