import HeaderDesktop from "../components/HeaderDesktop";
import HeaderMobile from "../components/HeaderMobile";
import { MdOutlineSearch, MdOutlineSpaceDashboard } from "react-icons/md";
import { MinimizeContext } from "../App";
import { useContext } from "react";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import { CiCreditCard1 } from "react-icons/ci";
import { IoMdNotificationsOutline } from "react-icons/io";
import { PiUserCircleDuotone } from "react-icons/pi";
import { FiPlus } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { GoPencil } from "react-icons/go";

function CardProfile() {
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
              <CiCreditCard1 size="1.5rem" />
              <span>Card Profile</span>
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
            <p className="text-[18px] font-bold">Card Profile</p>
            <p className="text-[12px]">
              Create, view and edit card profiles here.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between gap-4 border-b border-t border-[#98A2B3] py-3">
          <div className="relative">
            <MdOutlineSearch
              className="absolute left-2 top-[13px]"
              color="#808080"
            />
            <input
              type="text"
              className="h-[40px] w-[320px] rounded-md border border-[#D0D5DD] px-3 py-1 pl-8 text-[12px]"
              placeholder="Search by card name"
            />
          </div>
          <Link
            to="createprofile"
            className="flex items-center justify-center gap-2 rounded-md bg-[#014DAF] px-4 py-2 text-[12px] text-white"
          >
            <FiPlus size="1.5rem" /> Add Profile
          </Link>
        </div>

        <div className="w-full overflow-x-scroll">
          <div className="min-w-[1170px] border border-[#EAECF0] text-[#0000008F]">
            <ul className="grid h-[34px] w-full grid-cols-6 items-center border-b border-[#E2E2E2] bg-[#F1F7FF] text-center text-[12px] font-medium">
              <li className="px-[24px] py-[8px]">Card Name</li>
              <li className="border-l border-r border-[#EAECF0] px-[24px] py-[8px]">
                Currency
              </li>
              <li className="px-[24px] py-[8px]">Expiration</li>
              <li className="border-l border-r border-[#EAECF0] px-[24px] py-[8px]">
                Bin Prefix
              </li>
              <li className="border-r border-[#EAECF0] px-[24px] py-[8px]">
                Date Created
              </li>
              <li className="px-[24px] py-[8px]">Action</li>
            </ul>
            <ul className="grid h-[42px] w-full grid-cols-6 items-center border-b border-[#EAECF0] bg-white text-center text-[10px] last-of-type:border-none">
              <li className="h-full px-[24px] py-[14px]">Verve-1</li>
              <li className="h-full border-l border-r border-[#EAECF0] px-[24px] py-[14px]">
                NGN
              </li>
              <li className="h-full px-[24px] py-[14px]">40 months</li>
              <li className="h-full border-l border-r border-[#EAECF0] px-[24px] py-[14px]">
                50611234
              </li>
              <li className="h-full border-r border-[#EAECF0] px-[24px] py-[14px]">
                11/10/2024 23:21:03
              </li>
              <li className="flex h-full items-center justify-center gap-4 px-[24px] py-[8px]">
                <RiDeleteBin6Line size="1.5rem" />
                <GoPencil size="1.5rem" />
              </li>
            </ul>
            <ul className="grid h-[42px] w-full grid-cols-6 items-center border-b border-[#EAECF0] bg-white text-center text-[10px] last-of-type:border-none">
              <li className="h-full px-[24px] py-[14px]">Verve-1</li>
              <li className="h-full border-l border-r border-[#EAECF0] px-[24px] py-[14px]">
                NGN
              </li>
              <li className="h-full px-[24px] py-[14px]">40 months</li>
              <li className="h-full border-l border-r border-[#EAECF0] px-[24px] py-[14px]">
                50611234
              </li>
              <li className="h-full border-r border-[#EAECF0] px-[24px] py-[14px]">
                11/10/2024 23:21:03
              </li>
              <li className="flex h-full items-center justify-center gap-4 px-[24px] py-[8px]">
                <RiDeleteBin6Line size="1.5rem" />
                <GoPencil size="1.5rem" />
              </li>
            </ul>
            <ul className="grid h-[42px] w-full grid-cols-6 items-center border-b border-[#EAECF0] bg-white text-center text-[10px] last-of-type:border-none">
              <li className="h-full px-[24px] py-[14px]">Verve-1</li>
              <li className="h-full border-l border-r border-[#EAECF0] px-[24px] py-[14px]">
                NGN
              </li>
              <li className="h-full px-[24px] py-[14px]">40 months</li>
              <li className="h-full border-l border-r border-[#EAECF0] px-[24px] py-[14px]">
                50611234
              </li>
              <li className="h-full border-r border-[#EAECF0] px-[24px] py-[14px]">
                11/10/2024 23:21:03
              </li>
              <li className="flex h-full items-center justify-center gap-4 px-[24px] py-[8px]">
                <RiDeleteBin6Line size="1.5rem" />
                <GoPencil size="1.5rem" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardProfile;
