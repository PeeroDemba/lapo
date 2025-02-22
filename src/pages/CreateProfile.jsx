import HeaderDesktop from "../components/HeaderDesktop";
import HeaderMobile from "../components/HeaderMobile";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
  MdOutlineSpaceDashboard,
} from "react-icons/md";
import { MinimizeContext } from "../App";
import { useContext, useState } from "react";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import { CiCreditCard1 } from "react-icons/ci";
import { IoMdNotificationsOutline } from "react-icons/io";
import { PiUserCircleDuotone } from "react-icons/pi";
import { FiPlus } from "react-icons/fi";

function CreateProfile() {
  const { minimize } = useContext(MinimizeContext);
  const [toggle, setToggle] = useState(false);

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
              <Link to={-1}>
                <MdOutlineKeyboardArrowLeft size="1.5rem" />
              </Link>
              <p>Back</p>
              <CiCreditCard1 size="1.5rem" />
              <MdOutlineKeyboardArrowRight size="1.5rem" color="#D0D5DD" />
              <p className="hidden md:block">Card Profile</p>
              <MdOutlineKeyboardArrowRight size="1.5rem" color="#D0D5DD" />
              <p className="font-bold">Create Profile</p>
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
              Fill in profile details and add card fee.
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-4 rounded-md border border-[#E2E2E2] bg-white px-4 pb-8 pt-4">
          <p className="text-[18px] font-medium text-[#121212]">
            Profile Details
          </p>
          <div className="grid grid-cols-[300px] justify-center gap-8 xl:!grid-cols-2 xl:justify-start mobile:grid-cols-[448px] largest:grid-cols-3">
            <div className="flex max-w-[448px] flex-col gap-2">
              <label
                htmlFor="cardname"
                className="text-[14px] font-medium text-[#344054]"
              >
                Card Name*
              </label>
              <input
                type="text"
                name=""
                id="cardname"
                className="h-[44px] rounded-md border border-[#D0D5DD] px-3 py-1"
                placeholder="Enter card name"
              />
            </div>
            <div className="flex max-w-[448px] flex-col gap-2">
              <label
                htmlFor="bin"
                className="text-[14px] font-medium text-[#344054]"
              >
                Bin Prefix*
              </label>
              <input
                type="text"
                name=""
                id="bin"
                className="h-[44px] rounded-md border border-[#D0D5DD] px-3 py-1"
                placeholder="00000000"
              />
            </div>
            <div className="flex max-w-[448px] flex-col gap-2">
              <label
                htmlFor="cardscheme"
                className="text-[14px] font-medium text-[#344054]"
              >
                Card Scheme*
              </label>
              <select
                name=""
                id="cardscheme"
                className="h-[44px] rounded-md border border-[#D0D5DD] px-3 py-1"
              >
                <option selected>Verve</option>
                <option>Visa</option>
                <option>Mastercard</option>
              </select>
            </div>
            <div className="flex max-w-[448px] flex-col gap-2">
              <label
                htmlFor="expiration"
                className="text-[14px] font-medium text-[#344054]"
              >
                Expiration*
              </label>
              <input
                type="number"
                name=""
                id="expiration"
                className="h-[44px] rounded-md border border-[#D0D5DD] px-3 py-1"
                placeholder="0"
              />
            </div>
            <div className="flex max-w-[448px] flex-col gap-2">
              <label
                htmlFor="description"
                className="text-[14px] font-medium text-[#344054]"
              >
                Description
              </label>
              <input
                type="text"
                name=""
                id="description"
                className="h-[44px] rounded-md border border-[#D0D5DD] px-3 py-1"
              />
            </div>
            <div className="flex max-w-[448px] flex-col gap-2">
              <label
                htmlFor="currency"
                className="text-[14px] font-medium text-[#344054]"
              >
                Currency*
              </label>
              <select
                name=""
                id="currency"
                className="h-[44px] rounded-md border border-[#D0D5DD] px-3 py-1"
              >
                <option selected>NGN</option>
                <option>USD</option>
                <option>EUR</option>
                <option>GBP</option>
              </select>
            </div>
            <div className="flex max-w-[448px] flex-col gap-2">
              <label
                htmlFor="blacklist"
                className="text-[14px] font-medium text-[#344054]"
              >
                Branch Blacklist
              </label>
              <select
                name=""
                id="blacklist"
                className="h-[44px] rounded-md border border-[#D0D5DD] px-3 py-1"
              >
                <option selected>Head Office</option>
                <option>Head Office 2</option>
                <option>Head Office 3</option>
              </select>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-4 rounded-md border border-[#E2E2E2] bg-white px-4 pb-8 pt-4">
          <p className="text-[18px] font-medium text-[#121212]">Fees</p>
          <button
            type="button"
            onClick={() => {
              setToggle(true);
            }}
            className="flex w-max items-center justify-center gap-2 rounded-md bg-[#014DAF] px-4 py-2 text-[12px] text-white"
          >
            <FiPlus size="1.5rem" />
            Add Fee
          </button>
          <div className="w-full overflow-x-scroll">
            <div className="min-w-[1138px] border border-[#EAECF0] text-[#0000008F]">
              <ul className="grid h-[34px] w-full grid-cols-7 items-center border-b border-[#E2E2E2] bg-[#F1F7FF] text-center text-[12px] font-medium">
                <li className="px-[24px] py-[8px]">Name</li>
                <li className="border-l border-r border-[#EAECF0] px-[24px] py-[8px]">
                  Value
                </li>
                <li className="px-[24px] py-[8px]">Frequency</li>
                <li className="border-l border-r border-[#EAECF0] px-[24px] py-[8px]">
                  Currency
                </li>
                <li className="px-[24px] py-[8px]">Time</li>
                <li className="border-l border-r border-[#EAECF0] px-[24px] py-[8px]">
                  Account Pad
                </li>
                <li className="px-[24px] py-[8px]">Account</li>
              </ul>
              <ul className="grid h-[42px] w-full grid-cols-7 items-center border-b border-[#EAECF0] bg-white text-center text-[10px] last-of-type:border-none">
                <li className="h-full px-[24px] py-[14px]"></li>
                <li className="h-full border-l border-r border-[#EAECF0] px-[24px] py-[14px]"></li>
                <li className="h-full px-[24px] py-[14px]"></li>
                <li className="h-full border-l border-r border-[#EAECF0] px-[24px] py-[14px]"></li>
                <li className="h-full px-[24px] py-[14px]"></li>
                <li className="flex h-full items-center justify-center gap-4 border-l border-r border-[#EAECF0] px-[24px] py-[8px]"></li>
                <li className="h-full px-[24px] py-[14px]"></li>
              </ul>
            </div>
          </div>
        </div>

        <button
          type="button"
          className="mt-8 flex h-[44px] w-[293px] items-center justify-center gap-2 rounded-md bg-[#014DAF] px-4 py-2 text-[12px] text-white"
        >
          Create Profile
        </button>
      </div>
      {toggle && (
        <div className="fixed left-0 top-0 flex h-screen w-screen items-center justify-center bg-[#101828a4] backdrop-blur-[16px]">
          <div className="w-[498px] rounded-xl bg-white">
            <div className="mb-3 flex items-center justify-between px-6 pt-6">
              <div className="flex items-center gap-2">
                <MdOutlineSpaceDashboard size="1.5rem" />
                <div>
                  <p className="text-[18px] font-bold text-[#101828]">
                    Add Fee
                  </p>
                  <p className="text-[14px] text-[#475467]">
                    Fill in fee details.
                  </p>
                </div>
              </div>
              <MdOutlineSpaceDashboard
                size="1.5rem"
                onClick={() => {
                  setToggle(false);
                }}
              />
            </div>
            <div className="flex flex-col gap-4 border-b border-t border-[#EAECF0] p-6">
              <div className="flex max-w-[448px] flex-col gap-2">
                <label
                  htmlFor="fee"
                  className="text-[14px] font-medium text-[#344054]"
                >
                  Fee Name*
                </label>
                <input
                  type="text"
                  name=""
                  id="fee"
                  placeholder="Maintenance"
                  className="h-[44px] rounded-md border border-[#D0D5DD] px-3 py-1"
                />
              </div>
              <div className="flex max-w-[448px] flex-col gap-2">
                <label
                  htmlFor="value"
                  className="text-[14px] font-medium text-[#344054]"
                >
                  Value
                </label>
                <input
                  type="number"
                  name=""
                  id="value"
                  className="h-[44px] rounded-md border border-[#D0D5DD] px-3 py-1"
                  placeholder="0"
                />
              </div>

              <div className="flex max-w-[448px] flex-col gap-2">
                <label
                  htmlFor="currency"
                  className="text-[14px] font-medium text-[#344054]"
                >
                  Currency
                </label>
                <div className="flex gap-6">
                  <div className="flex gap-2">
                    <input
                      type="radio"
                      name="currency"
                      disabled
                      checked={true}
                      id=""
                      className="h-6 w-6 appearance-none rounded-full border border-[#0000008F] bg-[#F6F6F6] checked:border-[6px] checked:border-[#014caf85] checked:bg-white"
                    />
                    <p className="text-[#0000008F]">NGN</p>
                  </div>
                  <div className="flex gap-2">
                    <input
                      type="radio"
                      name="currency"
                      disabled
                      id=""
                      className="h-6 w-6 appearance-none rounded-full border border-[#0000008F] bg-[#F6F6F6] checked:border-[6px] checked:border-[#014DAF] checked:bg-white"
                    />
                    <p className="text-[#0000008F]">USD</p>
                  </div>
                </div>
              </div>
              <div className="flex max-w-[448px] flex-col gap-2">
                <label
                  htmlFor="frequency"
                  className="text-[14px] font-medium text-[#344054]"
                >
                  Fee Frequency
                </label>
                <div className="flex gap-6">
                  <div className="flex gap-2">
                    <input
                      type="radio"
                      name="frequency"
                      id=""
                      className="h-6 w-6 appearance-none rounded-full border border-[#0000008F] bg-[#F6F6F6] checked:border-[6px] checked:border-[#014DAF] checked:bg-white"
                    />
                    <p className="text-[#121212]">One Off</p>
                  </div>
                  <div className="flex gap-2">
                    <input
                      type="radio"
                      name="frequency"
                      id=""
                      className="h-6 w-6 appearance-none rounded-full border border-[#0000008F] bg-[#F6F6F6] checked:border-[6px] checked:border-[#014DAF] checked:bg-white"
                    />
                    <p className="text-[#121212]">Monthly</p>
                  </div>
                </div>
              </div>
              <div className="flex max-w-[448px] flex-col gap-2">
                <label
                  htmlFor="impact"
                  className="text-[14px] font-medium text-[#344054]"
                >
                  Fee Impact
                </label>
                <div className="flex gap-6">
                  <div className="flex gap-2">
                    <input
                      type="radio"
                      name="impact"
                      id=""
                      className="h-6 w-6 appearance-none rounded-full border border-[#0000008F] bg-[#F6F6F6] checked:border-[6px] checked:border-[#014DAF] checked:bg-white"
                    />
                    <p className="text-[#121212]">Issuance</p>
                  </div>
                  <div className="flex gap-2">
                    <input
                      type="radio"
                      name="impact"
                      id=""
                      className="h-6 w-6 appearance-none rounded-full border border-[#0000008F] bg-[#F6F6F6] checked:border-[6px] checked:border-[#014DAF] checked:bg-white"
                    />
                    <p className="text-[#121212]">Pin Reissue</p>
                  </div>
                </div>
              </div>
              <div className="flex max-w-[448px] flex-col gap-2">
                <label
                  htmlFor="pad"
                  className="text-[14px] font-medium text-[#344054]"
                >
                  Account Pad
                </label>
                <div className="flex gap-6">
                  <div className="flex gap-2">
                    <input
                      type="radio"
                      name="pad"
                      id=""
                      className="h-6 w-6 appearance-none rounded-full border border-[#0000008F] bg-[#F6F6F6] checked:border-[6px] checked:border-[#014DAF] checked:bg-white"
                    />
                    <p className="text-[#121212]">Issuance</p>
                  </div>
                  <div className="flex gap-2">
                    <input
                      type="radio"
                      name="pad"
                      id=""
                      className="h-6 w-6 appearance-none rounded-full border border-[#0000008F] bg-[#F6F6F6] checked:border-[6px] checked:border-[#014DAF] checked:bg-white"
                    />
                    <p className="text-[#121212]">Pin Reissue</p>
                  </div>
                  <div className="flex gap-2">
                    <input
                      type="radio"
                      name="pad"
                      id=""
                      className="h-6 w-6 appearance-none rounded-full border border-[#0000008F] bg-[#F6F6F6] checked:border-[6px] checked:border-[#014DAF] checked:bg-white"
                    />
                    <p className="text-[#121212]">Pin Reissue</p>
                  </div>
                </div>
              </div>
              <div className="flex max-w-[448px] flex-col gap-2">
                <label
                  htmlFor="account"
                  className="text-[14px] font-medium text-[#344054]"
                >
                  Account
                </label>
                <input
                  type="text"
                  name=""
                  id="account"
                  className="h-[44px] rounded-md border border-[#D0D5DD] px-3 py-1"
                />
              </div>
              <button
                type="button"
                onClick={() => {
                  setToggle(false);
                }}
                className="mt-8 flex h-[44px] w-full items-center justify-center gap-2 rounded-md bg-[#014DAF] px-4 py-2 text-[12px] text-white"
              >
                Add Fee
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CreateProfile;
