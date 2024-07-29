import PrimaryHeading from "../common/PrimaryHeading";
import Image from "next/image";
import { CuttingEdgeData } from "../common/Helper";
const CuttingEdge = () => {
  interface CuttingData {
    img: string;
    width: number;
    height: number;
  }

  return (
    <div className="xl:pb-40 lg:pb-5 md:pb-4 2xl:max-w-[1536px] mx-auto">
      <div className="container xl:max-w-[1180px] px-3">
        <PrimaryHeading
          textName="Cutting-Edge"
          blueText=" Technology for"
          blackText=" Your Needs"
          className="max-w-[606px] text-center mx-auto lg:pb-10 md:pb-7 pb-5"
        />
        {/* ======using-map====== */}
        <div className="flex items-center flex-wrap sm:gap-6 gap-5 justify-center">
          {CuttingEdgeData.map((obj: CuttingData, index: number) => (
            <div key={index}>
              <div className="lg:w-[209px] md:w-[182px] w-[120px] sm:min-h-[108px] min-h-[100px] h-full rounded-xl border-[0.5px] border-blue bg-off_white_blue flex justify-center items-center">
                <Image
                  src={obj.img}
                  width={obj.width}
                  height={obj.height}
                  alt="sql-img1"
                  className="max-sm:max-w-[70px] pointer-events-none"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CuttingEdge;
