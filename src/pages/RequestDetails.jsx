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
import { Link, useLocation } from "react-router-dom";
import { TbCreditCardRefund } from "react-icons/tb";
import { IoMdNotificationsOutline } from "react-icons/io";
import { PiUserCircleDuotone } from "react-icons/pi";
import { CgFileDocument } from "react-icons/cg";
import { RiLoader2Fill } from "react-icons/ri";
import { SiHackthebox } from "react-icons/si";
import { AiOutlineCodeSandbox } from "react-icons/ai";
import { GrStatusGood } from "react-icons/gr";

function RequestDetails() {
  const { minimize } = useContext(MinimizeContext);
  const [downloadToggle, setDownloadToggle] = useState(false);
  const [dispatchToggle, setDispatchToggle] = useState(false);
  const location = useLocation();

  const [pending, setPending] = useState(location.state.status !== "Pending");
  const [download, setDownload] = useState(location.state.status !== "Pending");
  const [inProgress, setInProgress] = useState(
    location.state.status !== "In Progress",
  );
  const [ready, setReady] = useState(location.state.status !== "Ready");
  const [dispatch, setDispatch] = useState(true);
  const [acknowledged, setAcknowledged] = useState(
    location.state.status !== "Acknowledged",
  );

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
              <TbCreditCardRefund size="1.5rem" />
              <MdOutlineKeyboardArrowRight size="1.5rem" color="#D0D5DD" />
              <p className="hidden md:block">Card Request</p>
              <MdOutlineKeyboardArrowRight size="1.5rem" color="#D0D5DD" />
              <p className="font-bold">Request Details</p>
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
            <p className="text-[18px] font-bold">Request Details</p>
            <p className="text-[12px]">
              Perform predetermined actions on card requests here.
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-4 rounded-md border border-[#E2E2E2] bg-white px-4 pb-8 pt-4">
          <p className="text-[18px] font-medium text-[#121212]">
            Card Request Details
          </p>
          <div className="grid grid-cols-[300px] justify-center gap-8 xl:!grid-cols-2 xl:justify-start mobile:grid-cols-[448px] largest:grid-cols-3">
            <div className="flex max-w-[448px] flex-col gap-2">
              <label
                htmlFor="brancname"
                className="text-[14px] font-medium text-[#344054]"
              >
                Branch Name
              </label>
              <input
                type="text"
                name=""
                disabled
                id="branchname"
                className="h-[44px] rounded-md border border-[#D0D5DD] bg-[#F5F5F7] px-3 py-1"
                value={location.state.branch}
              />
            </div>
            <div className="flex max-w-[448px] flex-col gap-2">
              <label
                htmlFor="initiator"
                className="text-[14px] font-medium text-[#344054]"
              >
                Initiator
              </label>
              <input
                type="text"
                name=""
                disabled
                id="initiator"
                className="h-[44px] rounded-md border border-[#D0D5DD] bg-[#F5F5F7] px-3 py-1"
                value={location.state.initiator}
              />
            </div>
            <div className="flex max-w-[448px] flex-col gap-2">
              <label
                htmlFor="cardtype"
                className="text-[14px] font-medium text-[#344054]"
              >
                Card Type
              </label>
              <input
                type="text"
                name=""
                disabled
                id="cardtype"
                className="h-[44px] rounded-md border border-[#D0D5DD] bg-[#F5F5F7] px-3 py-1"
                value="Classic Debit"
              />
            </div>
            <div className="flex max-w-[448px] flex-col gap-2">
              <label
                htmlFor="cardcharges"
                className="text-[14px] font-medium text-[#344054]"
              >
                Card Charges
              </label>
              <input
                type="text"
                name=""
                disabled
                id="cardcharges"
                className="h-[44px] rounded-md border border-[#D0D5DD] bg-[#F5F5F7] px-3 py-1"
                value="$1,500"
              />
            </div>
            <div className="flex max-w-[448px] flex-col gap-2">
              <label
                htmlFor="quantity"
                className="text-[14px] font-medium text-[#344054]"
              >
                Quantity
              </label>
              <input
                type="text"
                name=""
                disabled
                id="quantity"
                className="h-[44px] rounded-md border border-[#D0D5DD] bg-[#F5F5F7] px-3 py-1"
                value={location.state.quantity}
              />
            </div>
            <div className="flex max-w-[448px] flex-col gap-2">
              <label
                htmlFor="batch"
                className="text-[14px] font-medium text-[#344054]"
              >
                Batch
              </label>
              <input
                type="text"
                name=""
                disabled
                id="batch"
                className="h-[44px] rounded-md border border-[#D0D5DD] bg-[#F5F5F7] px-3 py-1"
                value={location.state.batch}
              />
            </div>
            <div className="flex max-w-[448px] flex-col gap-2">
              <p className="text-[14px] font-medium text-[#344054]">
                Date Requested
              </p>
              <p className="text-[#101828]">{location.state.date}</p>
            </div>
            <div className="flex max-w-[448px] flex-col gap-2">
              <p className="text-[14px] font-medium text-[#344054]">Status</p>
              {(!pending || !download) && (
                <p className="w-max rounded-[1rem] border border-[#EAECF0] bg-[#F9FAFB] px-6 py-[2px] text-[#344054]">
                  Pending
                </p>
              )}
              {!inProgress && (
                <p className="w-max rounded-[1rem] border border-[#FEDF89] bg-[#FFFAEB] px-6 py-[2px] text-[#B54708]">
                  In Progress
                </p>
              )}
              {!ready && (
                <p className="w-max rounded-[1rem] border border-[#ABEFC6] bg-[#ECFDF3] px-6 py-[2px] text-[#067647]">
                  Ready
                </p>
              )}
              {!dispatch && (
                <p className="w-max rounded-[1rem] border border-[#ABEFC6] bg-[#ECFDF3] px-6 py-[2px] text-[#067647]">
                  Ready
                </p>
              )}
              {!acknowledged && (
                <p className="w-max rounded-[1rem] border border-[#B2DDFF] bg-[#EFF8FF] px-6 py-[2px] text-[#175CD3]">
                  Acknowledged
                </p>
              )}
            </div>
            <div className="flex w-full flex-col gap-2 xl:col-span-2">
              <p className="text-[14px] font-medium text-[#344054]">Actions</p>
              <div className="flex flex-col items-center gap-6 xl:flex-row xl:gap-12">
                <button
                  type="button"
                  disabled={download === true}
                  onClick={() => {
                    setDownload(true);
                    setDownloadToggle(true);
                    setPending(false);
                    setAcknowledged(true);
                    setReady(true);
                    setInProgress(true);
                    setDispatch(true);
                  }}
                  style={{ opacity: download === true ? "0.5" : "1" }}
                  className="flex w-max items-center justify-center gap-2 rounded-md bg-[#344054] px-4 py-2 text-[12px] text-white"
                >
                  <CgFileDocument size="1.5rem" /> Download for Production
                </button>
                <button
                  type="button"
                  disabled={download === pending}
                  onClick={() => {
                    setPending(true);
                    setDownload(true);
                    setAcknowledged(true);
                    setReady(true);
                    setInProgress(false);
                    setDispatch(true);
                  }}
                  style={{
                    opacity: download === pending ? "0.5" : "1",
                  }}
                  className="flex w-max items-center justify-center gap-2 rounded-md bg-[#B54708] px-4 py-2 text-[12px] text-white"
                >
                  <RiLoader2Fill size="1.5rem" /> Mark as In Progress
                </button>
                <button
                  type="button"
                  disabled={inProgress === true}
                  onClick={() => {
                    setPending(true);
                    setDownload(true);
                    setAcknowledged(true);
                    setReady(false);
                    setInProgress(true);
                    setDispatch(true);
                  }}
                  style={{ opacity: inProgress === true ? "0.5" : "1" }}
                  className="flex w-max items-center justify-center gap-2 rounded-md bg-[#067647] px-4 py-2 text-[12px] text-white"
                >
                  <SiHackthebox size="1.5rem" /> Mark as Ready
                </button>
                <button
                  type="button"
                  disabled={ready === true}
                  onClick={() => {
                    setPending(true);
                    setDownload(true);
                    setAcknowledged(true);
                    setReady(true);
                    setInProgress(true);
                    setDispatch(false);
                    setDispatchToggle(true);
                  }}
                  style={{ opacity: ready === true ? "0.5" : "1" }}
                  className="flex w-max items-center justify-center gap-2 rounded-md bg-[#8020E7] px-4 py-2 text-[12px] text-white"
                >
                  <AiOutlineCodeSandbox size="1.5rem" /> Send to Dispatch
                </button>
                <button
                  type="button"
                  disabled={dispatch === true}
                  onClick={() => {
                    setPending(true);
                    setDownload(true);
                    setAcknowledged(false);
                    setReady(true);
                    setInProgress(true);
                    setDispatch(true);
                  }}
                  style={{ opacity: dispatch === true ? "0.5" : "1" }}
                  className="flex w-max items-center justify-center gap-2 rounded-md bg-[#014DAF] px-4 py-2 text-[12px] text-white"
                >
                  <GrStatusGood size="1.5rem" /> Mark as Acknowledged
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {downloadToggle && (
        <div className="fixed left-0 top-0 flex h-screen w-screen items-center justify-center bg-[#101828a4] backdrop-blur-[16px]">
          <div className="h-[232px] w-[498px] rounded-xl bg-white p-6">
            <div className="flex flex-col gap-2">
              <div className="mb-2 w-max rounded-lg border border-[#EAECF0] p-3">
                <GrStatusGood size="1.5rem" color="#007129" />
              </div>
              <div>
                <p className="mb-1 text-[18px] font-medium text-[#101828]">
                  Successful
                </p>
                <p className="text-[14px] text-[#475467]">
                  Production file has been downloaded.
                </p>
              </div>
              <button
                type="button"
                onClick={() => {
                  setDownloadToggle(false);
                }}
                className="mt-6 flex h-[36px] w-max items-center justify-center gap-2 rounded-md bg-[#014DAF] px-4 py-2 text-[12px] text-white"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
      {dispatchToggle && (
        <div className="fixed left-0 top-0 flex h-screen w-screen items-center justify-center bg-[#101828a4] backdrop-blur-[16px]">
          <div className="h-[232px] w-[498px] rounded-xl bg-white p-6">
            <div className="flex flex-col gap-2">
              <div className="mb-2 w-max rounded-lg border border-[#EAECF0] p-3">
                <GrStatusGood size="1.5rem" color="#007129" />
              </div>
              <div>
                <p className="mb-1 text-[18px] font-medium text-[#101828]">
                  Successful
                </p>
                <p className="text-[14px] text-[#475467]">
                  Card batch successfully sent to dispatch.
                </p>
              </div>
              <button
                type="button"
                onClick={() => {
                  setDispatchToggle(false);
                }}
                className="mt-6 flex h-[36px] w-max items-center justify-center gap-2 rounded-md bg-[#014DAF] px-4 py-2 text-[12px] text-white"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default RequestDetails;
