import Image from "next/image";
import Alternate from "./Alternate";
import wolf from "./wolf.webp";

export default function MrWolf() {
  return (
    <Alternate
      alt={
        <div>
          <Image
            src={wolf}
            alt="Mr. Wolf"
            className="border-[5px] border-black shadow-2xl"
          />
          <h2
            className={
              "absolute text-white bottom-[30%] left-0 right-0 text-center " +
              "font-bold text-5xl z-20 drop-shadow-[0_2px_2px_rgba(0,0,0,1)]"
            }
          >
            <div className="relative w-20 h-0 inline-block mb-2 border border-red-400">
              <div className="absolute -right-4 -bottom-[.14em] text-8xl">
                🏎️
              </div>
            </div>{" "}
            💨&nbsp;&nbsp;I CODE REAL FUCKING FAST
          </h2>
        </div>
      }
    >
      <div
        className={
          "border border-red-600 rounded-full p-1.5 px-4 font-bold " +
          "text-lg text-white bg-red-600 w-fit mb-5 hover:border-yellow-800"
        }
      >
        ⚠️ Warning...
      </div>
    </Alternate>
  );
}
