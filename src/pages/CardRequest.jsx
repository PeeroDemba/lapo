import HeaderDesktop from "../components/HeaderDesktop";
import HeaderMobile from "../components/HeaderMobile";
import { MdOutlineSearch, MdOutlineSpaceDashboard } from "react-icons/md";
import { MinimizeContext } from "../App";
import { useContext } from "react";
import "react-multi-carousel/lib/styles.css";
import PendingCard from "../components/PendingCard";
import InProgressCard from "../components/InProgressCard";
import ReadyCard from "../components/ReadyCard";
import AcknowledgedCard from "../components/AcknowledgedCard";
import { TbCreditCardRefund } from "react-icons/tb";
import { IoMdNotificationsOutline } from "react-icons/io";
import { PiUserCircleDuotone } from "react-icons/pi";

const cardRequestData = [
  {
    branch: "Corporate",
    initiator: "RootUser",
    quantity: 10,
    batch: 847264905,
    date: "11/14/2024 10:27:43",
    status: "Ready",
  },
  {
    branch: "Corporate",
    initiator: "RootUser",
    quantity: 10,
    batch: 847264905,
    date: "11/14/2024 10:27:43",
    status: "In Progress",
  },
  {
    branch: "Corporate",
    initiator: "RootUser",
    quantity: 10,
    batch: 847264905,
    date: "11/14/2024 10:27:43",
    status: "Acknowledged",
  },
  {
    branch: "Corporate",
    initiator: "RootUser",
    quantity: 10,
    batch: 847264905,
    date: "11/14/2024 10:27:43",
    status: "Pending",
  },
];

function CardRequest() {
  const { minimize } = useContext(MinimizeContext);

  return (
    <div className="min-h-screen">
      <HeaderMobile />
      <HeaderDesktop />
      <div className="hidden h-[48px] border-b border-[#DEDEDF] bg-transparent pb-[0.15rem] pt-3 md:block md:bg-white">
        <div
          className={
            minimize
              ? "mb-3 flex justify-between px-2 md:relative md:left-[122px] md:top-0 md:w-[calc(100%-122px)] md:px-4"
              : "mb-3 flex justify-between px-2 md:relative md:left-[230px] md:top-0 md:w-[calc(100%-230px)] md:px-4"
          }
        >
          <div className="flex items-center text-[#001735]">
            <p className="flex h-full items-center gap-2 text-center text-[0.75rem]">
              <TbCreditCardRefund size="1.5rem" />
              <span>Card Request</span>
            </p>
          </div>
          <div className="flex items-center gap-4 text-[#001735]">
            <IoMdNotificationsOutline size="1.5rem" />
            <PiUserCircleDuotone size="1.5rem" />
          </div>
        </div>
      </div>

      <div
        className={
          minimize
            ? "mb-8 flex w-full flex-col gap-4 overflow-x-scroll px-2 md:relative md:left-[122px] md:top-0 md:w-[calc(100%-122px)] md:px-4"
            : "mb-8 flex w-full flex-col gap-4 overflow-x-scroll px-2 md:relative md:left-[230px] md:top-0 md:w-[calc(100%-230px)] md:px-4"
        }
      >
        <div className="mt-14 flex w-full flex-col items-center justify-between gap-4 py-3 text-[#121212] sm:flex-row md:mt-0">
          <div className="">
            <p className="text-[18px] font-bold">Card Request</p>
            <p className="text-[12px]">
              View and attend to card requests here.
            </p>
          </div>
        </div>
        <div className="border-b border-t border-[#98A2B3] py-3">
          <div className="relative">
            <MdOutlineSearch
              className="absolute left-2 top-[13px]"
              color="#808080"
            />
            <input
              type="text"
              className="h-[40px] w-[320px] rounded-md border border-[#D0D5DD] px-3 py-1 pl-8 text-[12px]"
              placeholder="Search by branch"
            />
          </div>
        </div>
        <div className="overflow-x-scroll border border-[#E2E2E2] text-[#0000008F]">
          <ul className="grid min-w-[1170px] grid-cols-7 items-center border-b border-[#E2E2E2] bg-[#F9FAFB] text-center text-[12px] font-medium">
            <li className="px-[24px] py-[8px]">Branch</li>
            <li className="border-l border-r border-[#E2E2E2] px-[24px] py-[8px]">
              Initiator
            </li>
            <li className="px-[24px] py-[8px]">Quantity</li>
            <li className="border-l border-r border-[#E2E2E2] px-[24px] py-[8px]">
              Batch
            </li>
            <li className="px-[24px] py-[8px]">Date Requested</li>
            <li className="border-l border-r border-[#E2E2E2] px-[24px] py-[8px]">
              Status
            </li>
            <li className="px-[24px] py-[8px]">Action</li>
          </ul>
          {cardRequestData.map((e, i) => {
            if (e.status === "Ready") {
              return <ReadyCard key={i} e={e} />;
            }
            if (e.status === "In Progress") {
              return <InProgressCard key={i} e={e} />;
            }
            if (e.status === "Acknowledged") {
              return <AcknowledgedCard key={i} e={e} />;
            }
            if (e.status === "Pending") {
              return <PendingCard key={i} e={e} />;
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default CardRequest;
