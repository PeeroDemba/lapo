import HeaderDesktop from "../components/HeaderDesktop";
import HeaderMobile from "../components/HeaderMobile";
import {
  MdAddCard,
  MdCreditCard,
  MdHourglassEmpty,
  MdOutlineAddCard,
  MdOutlineSearch,
  MdOutlineSpaceDashboard,
} from "react-icons/md";
import { MinimizeContext } from "../App";
import { useContext } from "react";
import "react-multi-carousel/lib/styles.css";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { TbHome } from "react-icons/tb";
import { CgArrowsExpandRight, CgArrowTopRight } from "react-icons/cg";
import { IoMdNotificationsOutline } from "react-icons/io";
import { PiUserCircleDuotone } from "react-icons/pi";
import { SlCalender } from "react-icons/sl";
import { FaRegCreditCard } from "react-icons/fa";
import { AiOutlineCreditCard } from "react-icons/ai";
import { RiErrorWarningLine } from "react-icons/ri";
import { LiaMoneyBillWaveSolid } from "react-icons/lia";

const color = ["#014DAF", "#8020E7", "#FF4457", "#FFBA24", "#00984C"];

function Dashboard() {
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
              <TbHome size="1.5rem" />
              <span>Dashboard</span>
            </p>
          </div>
          <div className="flex items-center gap-4 text-[#001735]">
            <div className="relative">
              <MdOutlineSearch
                className="absolute left-2 top-[6px]"
                color="#808080"
              />
              <input
                type="text"
                className="h-6 rounded-3xl border border-[#D0D5DD] px-3 py-1 pl-8 text-[12px]"
                placeholder="Search"
              />
            </div>
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
            <p className="text-[18px] font-bold">
              Hi Nazeer, what would you like to do today?
            </p>
            <p className="text-[12px]">Last login: 26/11/2024 14:39:58</p>
          </div>
          <div className="flex items-center gap-2 rounded-md border border-[#D0D5DD] p-2 px-4">
            <div className="flex items-center gap-2">
              <SlCalender />
              <p className="font-medium">Today</p>
            </div>
            <p className="h-4 bg-[#D0D5DD] p-[0.5px]"></p>
            <p>11 Nov 2024</p>
          </div>
        </div>
        <div className="rounded-xl border border-[#E2E2E2] bg-white p-4 text-[#121212]">
          <p className="mb-4 font-medium">Your Quick Access</p>
          <div className="flex flex-wrap items-center justify-evenly gap-2">
            <div className="flex w-[278.5px] items-center gap-6 rounded-lg bg-[#F1F7FF] px-6 py-4">
              <MdOutlineAddCard
                size="1.5rem"
                className="rounded-full bg-[#014DAF] p-1 text-white"
              />
              <p className="text-[14px] font-medium">Manage a Card</p>
              <p className="-ml-4">{">"}</p>
            </div>
            <div className="flex w-[278.5px] items-center gap-6 rounded-lg bg-[#F1F7FF] px-6 py-4">
              <FaRegCreditCard
                size="1.5rem"
                className="rounded-full bg-[#014DAF] p-1 text-white"
              />
              <p className="text-[14px] font-medium">Issue Instant Card</p>
              <p className="-ml-4">{">"}</p>
            </div>
            <div className="flex w-[278.5px] items-center gap-6 rounded-lg bg-[#F1F7FF] px-6 py-4">
              <AiOutlineCreditCard
                size="1.5rem"
                className="rounded-full bg-[#014DAF] p-1 text-white"
              />
              <p className="text-[14px] font-medium">Issue Personalized Card</p>
              <p className="-ml-4">{">"}</p>
            </div>
            <div className="flex w-[278.5px] items-center gap-6 rounded-lg bg-[#F1F7FF] px-6 py-4">
              <MdAddCard
                size="1.5rem"
                className="rounded-full bg-[#014DAF] p-1 text-white"
              />
              <p className="text-[14px] font-medium">Review Card Requests</p>
              <p className="-ml-4">{">"}</p>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <p className="text-[18px] font-bold">Analytics</p>
          <p className="w-full bg-[#D0D5DD] p-[0.5px]"></p>
        </div>
        <div className="flex flex-wrap items-center justify-evenly gap-2">
          <div className="flex h-[110px] w-[286.5px] flex-col justify-between rounded-lg border border-[#E2E2E2] bg-white p-4">
            <div>
              <FaRegCreditCard color="#00984C" />
              <p className="text-[14px] font-medium text-[#0000008F]">
                Total Active Cards
              </p>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-[24px] font-bold text-[#121212]">26,478</p>
              <div className="flex items-center gap-2 text-[12px]">
                <div className="flex w-[56px] items-center gap-1 rounded-md bg-[#EFFAF6] px-2 py-[0.5px] text-[#29A174]">
                  <CgArrowTopRight size="1.5rem" color="#29A174" />
                  <p>+9%</p>
                </div>
                <p className="text-[#0000008F]">this month</p>
              </div>
            </div>
          </div>
          <div className="flex h-[110px] w-[286.5px] flex-col justify-between rounded-lg border border-[#E2E2E2] bg-white p-4">
            <div>
              <MdCreditCard color="#8020E7" />
              <p className="text-[14px] font-medium text-[#0000008F]">
                Total Personalized Cards
              </p>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-[24px] font-bold text-[#121212]">15,703</p>
              <div className="flex items-center gap-2 text-[12px]">
                <div className="flex w-[56px] items-center gap-1 rounded-md bg-[#EFFAF6] px-2 py-[0.5px] text-[#29A174]">
                  <CgArrowTopRight size="1.5rem" color="#29A174" />
                  <p>8.5%</p>
                </div>
                <p className="text-[#0000008F]">this month</p>
              </div>
            </div>
          </div>
          <div className="flex h-[110px] w-[286.5px] flex-col justify-between rounded-lg border border-[#E2E2E2] bg-white p-4">
            <div>
              <LiaMoneyBillWaveSolid color="#2087E7" />
              <p className="text-[14px] font-medium text-[#0000008F]">
                Today’s Revenue
              </p>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-[24px] font-bold text-[#121212]">₦9.3M</p>
              <div className="flex items-center gap-2 text-[12px]">
                <div className="flex w-[56px] items-center gap-2 rounded-md bg-[#EFFAF6] px-2 py-[0.5px] text-[#29A174]">
                  <CgArrowTopRight size="1.5rem" color="#29A174" />
                  <p>+6%</p>
                </div>
                <p className="text-[#0000008F]">vs yesterday</p>
              </div>
            </div>
          </div>
          <div className="flex h-[110px] w-[286.5px] flex-col justify-between rounded-lg border border-[#E2E2E2] bg-white p-4">
            <div>
              <MdHourglassEmpty className="text-[#E78020]" />
              <p className="text-[14px] font-medium text-[#0000008F]">
                Pending Requests
              </p>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-[24px] font-bold text-[#121212]">38</p>
              <div className="flex items-center gap-2 text-[12px]">
                <div className="flex w-max items-center gap-1 rounded-md px-2 py-[0.5px] text-[#E78020]">
                  <RiErrorWarningLine size="1.5rem" />
                  <p>Requires attention</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-3 xl:flex-row">
          <div className="h-[381px] w-full rounded-lg bg-white p-4 xl:w-[calc(50%-6px)]">
            <p className="mb-4 text-[18px] font-medium">Monthly Issuance</p>
            <ResponsiveContainer height={300}>
              <BarChart
                barGap="-80%"
                width={730}
                height={250}
                data={[
                  {
                    day: "May",
                    Personalized: 10,
                    Instant: 50,
                  },
                  {
                    day: "Jun",
                    Personalized: 20,
                    Instant: 70,
                  },
                  {
                    day: "Jul",
                    Personalized: 5,
                    Instant: 30,
                  },
                  {
                    day: "Aug",
                    Personalized: 10,
                    Instant: 60,
                  },
                  {
                    day: "Sep",
                    Personalized: 15,
                    Instant: 50,
                  },
                  {
                    day: "Oct",
                    Personalized: 20,
                    Instant: 80,
                  },
                  {
                    day: "Nov",
                    Personalized: 10,
                    Instant: 75,
                  },
                ]}
              >
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Legend
                  verticalAlign="bottom"
                  height={16}
                  iconType="circle"
                  iconSize={8}
                />
                <Bar dataKey="Instant" fill="#CCE2FF" />
                <Bar dataKey="Personalized" fill="#014DAF" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="h-[381px] w-full rounded-lg bg-white p-4 xl:w-[calc(50%-6px)]">
            <div className="mb-4 flex items-center justify-between">
              <p className="text-[18px] font-medium">Recent Card Requests</p>
              <CgArrowsExpandRight size="1.5rem" color="#D0D5DD" />
            </div>
            <div className="text-[#0000008F]">
              <ul className="grid w-full grid-cols-5 items-center border border-[#E2E2E2] bg-[#F1F7FF] text-center text-[12px] font-medium">
                <li className="px-[24px] py-[8px]">Branch</li>
                <li className="px-[24px] py-[8px]">Card Type</li>
                <li className="px-[24px] py-[8px]">Quantity</li>
                <li className="px-[24px] py-[8px]">Status</li>
                <li className="px-[24px] py-[8px]">Action</li>
              </ul>
              <div>
                <ul className="grid h-[42px] w-full grid-cols-5 items-center border-b border-[#EAECF0] bg-white text-center text-[10px] last-of-type:border-none">
                  <li className="px-[24px] py-[8px]">Corporate</li>
                  <li className="px-[24px] py-[8px]">Instant</li>
                  <li className="px-[24px] py-[8px]">10</li>
                  <li className="flex justify-center px-[24px] py-[8px]">
                    <p className="w-max rounded-[1rem] border border-[#ABEFC6] bg-[#ECFDF3] px-2 py-[2px] text-[#067647]">
                      Ready
                    </p>
                  </li>
                  <li className="px-[24px] py-[8px] font-bold text-[#014DAF]">
                    View
                  </li>
                </ul>
                <ul className="grid h-[42px] w-full grid-cols-5 items-center border-b border-[#EAECF0] bg-white text-center text-[10px] last-of-type:border-none">
                  <li className="px-[24px] py-[8px]">Corporate</li>
                  <li className="px-[24px] py-[8px]">Instant</li>
                  <li className="px-[24px] py-[8px]">10</li>
                  <li className="flex justify-center px-[24px] py-[8px]">
                    <p className="w-max rounded-[1rem] border border-[#FEDF89] bg-[#FFFAEB] px-2 py-[2px] text-[#B54708]">
                      In Progress
                    </p>
                  </li>
                  <li className="px-[24px] py-[8px] font-bold text-[#014DAF]">
                    View
                  </li>
                </ul>
                <ul className="grid h-[42px] w-full grid-cols-5 items-center border-b border-[#EAECF0] bg-white text-center text-[10px] last-of-type:border-none">
                  <li className="px-[24px] py-[8px]">Corporate</li>
                  <li className="px-[24px] py-[8px]">Instant</li>
                  <li className="px-[24px] py-[8px]">10</li>
                  <li className="flex justify-center px-[24px] py-[8px]">
                    <p className="w-max rounded-[1rem] border border-[#B2DDFF] bg-[#EFF8FF] px-2 py-[2px] text-[#175CD3]">
                      Acknowledged
                    </p>
                  </li>
                  <li className="px-[24px] py-[8px] font-bold text-[#014DAF]">
                    View
                  </li>
                </ul>
                <ul className="grid h-[42px] w-full grid-cols-5 items-center border-b border-[#EAECF0] bg-white text-center text-[10px] last-of-type:border-none">
                  <li className="px-[24px] py-[8px]">Corporate</li>
                  <li className="px-[24px] py-[8px]">Instant</li>
                  <li className="px-[24px] py-[8px]">10</li>
                  <li className="flex justify-center px-[24px] py-[8px]">
                    <p className="w-max rounded-[1rem] border border-[#EAECF0] bg-[#F9FAFB] px-2 py-[2px] text-[#344054]">
                      Pending
                    </p>
                  </li>
                  <li className="px-[24px] py-[8px] font-bold text-[#014DAF]">
                    View
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <div className="h-[381px] w-full rounded-lg bg-white p-4 xl:w-[calc(50%-6px)]">
            <p className="mb-4 text-[18px] font-medium">
              This Week&apos;s Income
            </p>
            <ResponsiveContainer height={300}>
              <AreaChart
                width={650}
                height={280}
                data={[
                  { name: "Mon", value: 50 },
                  { name: "Tue", value: 39 },
                  { name: "Wed", value: 40 },
                  { name: "Thu", value: 39 },
                  { name: "Fri", value: 58 },
                  { name: "Sat", value: 30 },
                  { name: "Sun", value: 80 },
                ]}
                margin={{
                  top: 0,
                  right: 20,
                  bottom: 0,
                  left: -30,
                }}
              >
                <XAxis dataKey="name" />
                <YAxis dataKey="value" />
                <CartesianGrid strokeDasharray="1 1" />
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="#4DAF01"
                  fill="#fff"
                  strokeWidth={3}
                />
                <Tooltip />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <div className="h-[381px] w-full rounded-lg bg-white p-4 xl:w-[calc(50%-6px)]">
            <p className="mb-4 text-[18px] font-medium">
              Card Status Distribution
            </p>
            <ResponsiveContainer height={300}>
              <PieChart width={730} height={250}>
                <Pie
                  data={[
                    {
                      name: "Inactive",
                      value: 160,
                    },
                    {
                      name: "Blocked",
                      value: 80,
                    },
                    {
                      name: "Lost",
                      value: 40,
                    },
                    {
                      name: "Expired",
                      value: 300,
                    },
                    {
                      name: "Active",
                      value: 1670,
                    },
                  ]}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  innerRadius={88}
                >
                  {[
                    {
                      name: "Group A",
                      value: 400,
                    },
                    {
                      name: "Group B",
                      value: 300,
                    },
                    {
                      name: "Group C",
                      value: 300,
                    },
                    {
                      name: "Group D",
                      value: 200,
                    },
                    {
                      name: "Group E",
                      value: 278,
                    },
                  ].map((_, index) => (
                    <Cell key={`cell-${index}`} fill={color[index]} />
                  ))}
                </Pie>
                <Legend
                  verticalAlign="bottom"
                  height={16}
                  iconType="circle"
                  iconSize={8}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
