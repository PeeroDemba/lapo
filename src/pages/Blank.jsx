import HeaderDesktop from "../components/HeaderDesktop";
import HeaderMobile from "../components/HeaderMobile";
import { MinimizeContext } from "../App";
import { useContext } from "react";
import "react-multi-carousel/lib/styles.css";

function Blank() {
  const { minimize } = useContext(MinimizeContext);

  return (
    <div className="min-h-screen">
      <HeaderMobile />
      <HeaderDesktop />

      <div
        className={
          minimize
            ? "mb-8 flex w-full flex-col gap-4 overflow-x-scroll px-2 md:relative md:left-[122px] md:top-0 md:w-[calc(100%-122px)] md:px-4"
            : "mb-8 flex w-full flex-col gap-4 overflow-x-scroll px-2 md:relative md:left-[230px] md:top-0 md:w-[calc(100%-230px)] md:px-4"
        }
      >
        <div className="mt-4 flex items-center justify-center">
          <p className="text-[32px]">Nothing to see here for now :)</p>
        </div>
      </div>
    </div>
  );
}

export default Blank;
