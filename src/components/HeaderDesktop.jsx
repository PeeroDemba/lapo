import { MdFormatListBulleted, MdOutlineSpaceDashboard } from "react-icons/md";
import { FaChevronLeft, FaRegMap, FaRegUser } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { HiOutlineArrowLeftStartOnRectangle } from "react-icons/hi2";
import { NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { MinimizeContext } from "../App";
import {
  TbCreditCardOff,
  TbCreditCardRefund,
  TbHome,
  TbUserShield,
} from "react-icons/tb";
import {
  PiBuildingOfficeLight,
  PiStack,
  PiUsersThreeLight,
} from "react-icons/pi";
import { IoIdCardOutline } from "react-icons/io5";
import { CiCreditCard1 } from "react-icons/ci";
import { AiOutlineStock } from "react-icons/ai";
import { VscCreditCard } from "react-icons/vsc";
import { LuLogOut } from "react-icons/lu";

function HeaderDesktop() {
  const navigate = useNavigate();
  const { minimize, setMinimize } = useContext(MinimizeContext);

  return minimize ? (
    <div className="fixed left-0 top-0 hidden h-screen w-[122px] flex-col items-center gap-4 border-[1px] border-y-0 border-l-0 border-solid border-[#eaeaef] bg-[#002F6C] pt-3 md:flex">
      <div className="flex w-full flex-col items-center justify-between gap-4 p-2 py-4">
        <div>
          <img src="/images/LAPOLogo.svg" alt="" />
        </div>
        <p
          className="rounded-full border-[1px] border-solid border-[#eaeaef] p-2 text-white"
          onClick={() => {
            setMinimize(false);
          }}
        >
          <FaChevronRight size="1rem" />
        </p>
      </div>
      <ul className="flex h-full w-full flex-col gap-4 overflow-y-scroll p-6 text-[12px]">
        <NavLink
          to="/"
          style={({ isActive }) => {
            return {
              color: isActive ? "#014DAF" : "#D0D5DD",
              backgroundColor: isActive ? "#F6F6F6" : "transparent",
            };
          }}
          className="flex h-[38px] items-center justify-center rounded-lg p-2"
        >
          <TbHome size="1.5rem" />
        </NavLink>
        <NavLink
          to="/blank"
          style={({ isActive }) => {
            return {
              color: isActive ? "#014DAF" : "#D0D5DD",
              backgroundColor: isActive ? "#F6F6F6" : "transparent",
            };
          }}
          className="flex h-[38px] items-center justify-center rounded-lg p-2"
        >
          <PiBuildingOfficeLight size="1.5rem" />
        </NavLink>
        <NavLink
          to="/blank"
          style={({ isActive }) => {
            return {
              color: isActive ? "#014DAF" : "#D0D5DD",
              backgroundColor: isActive ? "#F6F6F6" : "transparent",
            };
          }}
          className="flex h-[38px] items-center justify-center rounded-lg p-2"
        >
          <TbUserShield size="1.5rem" />
        </NavLink>
        <NavLink
          to="/blank"
          style={({ isActive }) => {
            return {
              color: isActive ? "#014DAF" : "#D0D5DD",
              backgroundColor: isActive ? "#F6F6F6" : "transparent",
            };
          }}
          className="flex h-[38px] items-center justify-center rounded-lg p-2"
        >
          <PiUsersThreeLight size="1.5rem" />
        </NavLink>
        <NavLink
          to="/blank"
          style={({ isActive }) => {
            return {
              color: isActive ? "#014DAF" : "#D0D5DD",
              backgroundColor: isActive ? "#F6F6F6" : "transparent",
            };
          }}
          className="flex h-[38px] items-center justify-center rounded-lg p-2"
        >
          <IoIdCardOutline size="1.5rem" />
        </NavLink>
        <NavLink
          to="/cardprofile"
          style={({ isActive }) => {
            return {
              color: isActive ? "#014DAF" : "#D0D5DD",
              backgroundColor: isActive ? "#F6F6F6" : "transparent",
            };
          }}
          className="flex h-[38px] items-center justify-center rounded-lg p-2"
        >
          <CiCreditCard1 size="1.5rem" />
        </NavLink>
        <NavLink
          to="/cardrequest"
          style={({ isActive }) => {
            return {
              color: isActive ? "#014DAF" : "#D0D5DD",
              backgroundColor: isActive ? "#F6F6F6" : "transparent",
            };
          }}
          className="flex h-[38px] items-center justify-center rounded-lg p-2"
        >
          <TbCreditCardRefund size="1.5rem" />
        </NavLink>
        <NavLink
          to="/blank"
          style={({ isActive }) => {
            return {
              color: isActive ? "#014DAF" : "#D0D5DD",
              backgroundColor: isActive ? "#F6F6F6" : "transparent",
            };
          }}
          className="flex h-[38px] items-center justify-center rounded-lg p-2"
        >
          <AiOutlineStock size="1.5rem" />
        </NavLink>
        <NavLink
          to="/blank"
          style={({ isActive }) => {
            return {
              color: isActive ? "#014DAF" : "#D0D5DD",
              backgroundColor: isActive ? "#F6F6F6" : "transparent",
            };
          }}
          className="flex h-[38px] items-center justify-center rounded-lg p-2"
        >
          <VscCreditCard size="1.5rem" />
        </NavLink>
        <NavLink
          to="/blank"
          style={({ isActive }) => {
            return {
              color: isActive ? "#014DAF" : "#D0D5DD",
              backgroundColor: isActive ? "#F6F6F6" : "transparent",
            };
          }}
          className="flex h-[38px] items-center justify-center rounded-lg p-2"
        >
          <TbCreditCardOff size="1.5rem" />
        </NavLink>
        <NavLink
          to="/blank"
          style={({ isActive }) => {
            return {
              color: isActive ? "#014DAF" : "#D0D5DD",
              backgroundColor: isActive ? "#F6F6F6" : "transparent",
            };
          }}
          className="flex h-[38px] items-center justify-center rounded-lg p-2"
        >
          <MdFormatListBulleted size="1.5rem" />
        </NavLink>
        <NavLink
          to="/blank"
          style={({ isActive }) => {
            return {
              color: isActive ? "#014DAF" : "#D0D5DD",
              backgroundColor: isActive ? "#F6F6F6" : "transparent",
            };
          }}
          className="flex h-[38px] items-center justify-center rounded-lg p-2"
        >
          <PiStack size="1.5rem" />
        </NavLink>
        <NavLink
          to="/blank"
          style={({ isActive }) => {
            return {
              color: isActive ? "#014DAF" : "#D0D5DD",
              backgroundColor: isActive ? "#F6F6F6" : "transparent",
            };
          }}
          className="flex h-[38px] items-center justify-center rounded-lg p-2"
        >
          <FaRegMap size="1.5rem" />
        </NavLink>
        <NavLink
          to="/blank"
          style={({ isActive }) => {
            return {
              color: isActive ? "#014DAF" : "#D0D5DD",
              backgroundColor: isActive ? "#F6F6F6" : "transparent",
            };
          }}
          className="flex h-[38px] items-center justify-center rounded-lg p-2"
        >
          <FaRegUser size="1.5rem" />
        </NavLink>

        <div className="flex flex-col justify-center">
          <button
            onClick={() => {
              localStorage.clear();
              navigate("/");
            }}
            className="mb-24 mt-40 flex h-[38px] items-center justify-center rounded-lg p-2 text-white"
          >
            <LuLogOut size="1.5rem" />
          </button>
          <div className="p-2">
            <img src="/images/cardinfra.svg" alt="" />
          </div>
        </div>
      </ul>
    </div>
  ) : (
    <div className="fixed left-0 top-0 hidden h-screen w-[230px] flex-col items-center gap-4 border-[1px] border-y-0 border-l-0 border-solid border-[#eaeaef] bg-[#002F6C] pt-6 md:flex">
      <div className="flex w-full items-center justify-between gap-2 pl-4 pr-4">
        <div>
          <img src="/images/LAPOLogo.svg" alt="" />
        </div>
        <p
          className="rounded-full border-[1px] border-solid border-[#eaeaef] p-2 text-white"
          onClick={() => {
            setMinimize(true);
          }}
        >
          <FaChevronLeft size="1rem" />
        </p>
      </div>
      <ul className="flex h-full w-full flex-col gap-4 overflow-y-scroll p-6 text-[12px]">
        <NavLink
          to="/"
          style={({ isActive }) => {
            return {
              color: isActive ? "#014DAF" : "#D0D5DD",
              backgroundColor: isActive ? "#F6F6F6" : "transparent",
            };
          }}
          className="flex h-[38px] items-center gap-2 rounded-lg p-2"
        >
          <TbHome size="1.5rem" />
          <span>Dashboard</span>
        </NavLink>
        <p className="text-[8.5px] text-[#7E8B9C]">MAIN MENU</p>
        <NavLink
          to="/blank"
          style={({ isActive }) => {
            return {
              color: isActive ? "#014DAF" : "#D0D5DD",
              backgroundColor: isActive ? "#F6F6F6" : "transparent",
            };
          }}
          className="flex h-[38px] items-center gap-2 rounded-lg p-2"
        >
          <PiBuildingOfficeLight size="1.5rem" />
          <span>Branches</span>
        </NavLink>
        <NavLink
          to="/blank"
          style={({ isActive }) => {
            return {
              color: isActive ? "#014DAF" : "#D0D5DD",
              backgroundColor: isActive ? "#F6F6F6" : "transparent",
            };
          }}
          className="flex h-[38px] items-center gap-2 rounded-lg p-2"
        >
          <TbUserShield size="1.5rem" />
          <span>Roles</span>
        </NavLink>
        <NavLink
          to="/blank"
          style={({ isActive }) => {
            return {
              color: isActive ? "#014DAF" : "#D0D5DD",
              backgroundColor: isActive ? "#F6F6F6" : "transparent",
            };
          }}
          className="flex h-[38px] items-center gap-2 rounded-lg p-2"
        >
          <PiUsersThreeLight size="1.5rem" />
          <span>Users</span>
        </NavLink>
        <NavLink
          to="/blank"
          style={({ isActive }) => {
            return {
              color: isActive ? "#014DAF" : "#D0D5DD",
              backgroundColor: isActive ? "#F6F6F6" : "transparent",
            };
          }}
          className="flex h-[38px] items-center gap-2 rounded-lg p-2"
        >
          <IoIdCardOutline size="1.5rem" />
          <span>Card Scheme</span>
        </NavLink>
        <NavLink
          to="/cardprofile"
          style={({ isActive }) => {
            return {
              color: isActive ? "#014DAF" : "#D0D5DD",
              backgroundColor: isActive ? "#F6F6F6" : "transparent",
            };
          }}
          className="flex h-[38px] items-center gap-2 rounded-lg p-2"
        >
          <CiCreditCard1 size="1.5rem" />
          <span>Card Profile</span>
        </NavLink>
        <NavLink
          to="/cardrequest"
          style={({ isActive }) => {
            return {
              color: isActive ? "#014DAF" : "#D0D5DD",
              backgroundColor: isActive ? "#F6F6F6" : "transparent",
            };
          }}
          className="flex h-[38px] items-center gap-2 rounded-lg p-2"
        >
          <TbCreditCardRefund size="1.5rem" />
          <span>Card Request</span>
        </NavLink>
        <NavLink
          to="/blank"
          style={({ isActive }) => {
            return {
              color: isActive ? "#014DAF" : "#D0D5DD",
              backgroundColor: isActive ? "#F6F6F6" : "transparent",
            };
          }}
          className="flex h-[38px] items-center gap-2 rounded-lg p-2"
        >
          <AiOutlineStock size="1.5rem" />
          <span>Stock</span>
        </NavLink>
        <NavLink
          to="/blank"
          style={({ isActive }) => {
            return {
              color: isActive ? "#014DAF" : "#D0D5DD",
              backgroundColor: isActive ? "#F6F6F6" : "transparent",
            };
          }}
          className="flex h-[38px] items-center gap-2 rounded-lg p-2"
        >
          <VscCreditCard size="1.5rem" />
          <span>Cards</span>
        </NavLink>
        <NavLink
          to="/blank"
          style={({ isActive }) => {
            return {
              color: isActive ? "#014DAF" : "#D0D5DD",
              backgroundColor: isActive ? "#F6F6F6" : "transparent",
            };
          }}
          className="flex h-[38px] items-center gap-2 rounded-lg p-2"
        >
          <TbCreditCardOff size="1.5rem" />
          <span>Block/Unblock Card</span>
        </NavLink>
        <NavLink
          to="/blank"
          style={({ isActive }) => {
            return {
              color: isActive ? "#014DAF" : "#D0D5DD",
              backgroundColor: isActive ? "#F6F6F6" : "transparent",
            };
          }}
          className="flex h-[38px] items-center gap-2 rounded-lg p-2"
        >
          <MdFormatListBulleted size="1.5rem" />
          <span>Authorization List</span>
        </NavLink>
        <NavLink
          to="/blank"
          style={({ isActive }) => {
            return {
              color: isActive ? "#014DAF" : "#D0D5DD",
              backgroundColor: isActive ? "#F6F6F6" : "transparent",
            };
          }}
          className="flex h-[38px] items-center gap-2 rounded-lg p-2"
        >
          <PiStack size="1.5rem" />
          <span>Authorization Queue</span>
        </NavLink>
        <NavLink
          to="/blank"
          style={({ isActive }) => {
            return {
              color: isActive ? "#014DAF" : "#D0D5DD",
              backgroundColor: isActive ? "#F6F6F6" : "transparent",
            };
          }}
          className="flex h-[38px] items-center gap-2 rounded-lg p-2"
        >
          <FaRegMap size="1.5rem" />
          <span>Trail</span>
        </NavLink>
        <NavLink
          to="/blank"
          style={({ isActive }) => {
            return {
              color: isActive ? "#014DAF" : "#D0D5DD",
              backgroundColor: isActive ? "#F6F6F6" : "transparent",
            };
          }}
          className="flex h-[38px] items-center gap-2 rounded-lg p-2"
        >
          <FaRegUser size="1.5rem" />
          <span>Account</span>
        </NavLink>
        <div>
          <button
            onClick={() => {
              localStorage.clear();
              navigate("/");
            }}
            className="mb-24 mt-40 flex h-[38px] items-center gap-2 rounded-lg p-2 text-[12px] text-white"
          >
            <LuLogOut size="1.5rem" />
            <span>Logout</span>
          </button>
          <div className="p-2">
            <p className="mb-2 text-[8.5px] font-medium text-[#7E8B9C]">
              POWERED BY
            </p>
            <img src="/images/cardinfra.svg" alt="" />
          </div>
        </div>
      </ul>
    </div>
  );
}

export default HeaderDesktop;
