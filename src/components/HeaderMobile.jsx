import { RiMenu2Fill } from "react-icons/ri";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  TbCreditCardOff,
  TbCreditCardRefund,
  TbHome,
  TbUserShield,
} from "react-icons/tb";
import {
  PiBuildingOfficeLight,
  PiStack,
  PiUserCircleDuotone,
  PiUsersThreeLight,
} from "react-icons/pi";
import { IoIdCardOutline } from "react-icons/io5";
import { CiCreditCard1 } from "react-icons/ci";
import { AiOutlineStock } from "react-icons/ai";
import { VscCreditCard } from "react-icons/vsc";
import { LuLogOut } from "react-icons/lu";
import { MdFormatListBulleted } from "react-icons/md";
import { FaRegMap, FaRegUser } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";

function HeaderMobile() {
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="fixed left-0 top-0 z-50 mb-3 flex w-full items-center justify-between bg-white p-4 md:hidden">
      <div className="flex h-full items-center gap-2 text-center text-[0.75rem]">
        {location.pathname === "/" && (
          <>
            <TbHome size="1.5rem" />
            <p>Dashboard</p>
          </>
        )}
        {location.pathname === "/cardprofile" && (
          <>
            <CiCreditCard1 size="1.5rem" />
            <p>Card Profile</p>
          </>
        )}
        {location.pathname === "/cardrequest" && (
          <>
            <TbCreditCardRefund size="1.5rem" />
            <p>Card Request</p>
          </>
        )}
        {location.pathname === "/cardprofile/createprofile" && (
          <>
            <Link to={-1}>
              <MdOutlineKeyboardArrowLeft size="1.5rem" />
            </Link>
            <p>Back</p>
            <CiCreditCard1 size="1.5rem" />
            <MdOutlineKeyboardArrowRight
              size="1.5rem"
              className="hidden md:block"
              color="#D0D5DD"
            />
            <p className="hidden md:block">Card Profile</p>
            <MdOutlineKeyboardArrowRight size="1.5rem" color="#D0D5DD" />
            <p className="font-bold">Create Profile</p>
          </>
        )}
        {location.pathname === "/cardrequest/requestdetails" && (
          <>
            <Link to={-1}>
              <MdOutlineKeyboardArrowLeft size="1.5rem" />
            </Link>
            <p>Back</p>
            <TbCreditCardRefund size="1.5rem" />
            <MdOutlineKeyboardArrowRight
              size="1.5rem"
              className="hidden md:block"
              color="#D0D5DD"
            />
            <p className="hidden md:block">Card Request</p>
            <MdOutlineKeyboardArrowRight size="1.5rem" color="#D0D5DD" />
            <p className="font-bold">Request Details</p>
          </>
        )}
      </div>
      <div className="flex items-center gap-2">
        <IoMdNotificationsOutline size="1.5rem" />
        <PiUserCircleDuotone size="1.5rem" />
        <div className="cursor-pointer">
          <RiMenu2Fill
            size="1.5rem"
            onClick={() => {
              setToggle((v) => !v);
            }}
          />
          <ul
            className={`fixed left-0 z-50 ${toggle ? "flex" : "hidden"} top-[56px] h-[calc(100vh-56px)] w-screen flex-col gap-4 overflow-y-scroll bg-[#002F6C] p-6 text-[12px]`}
          >
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
      </div>
    </div>
  );
}

export default HeaderMobile;
