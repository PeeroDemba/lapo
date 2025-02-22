import { Link } from "react-router-dom";

function PendingCard({ e }) {
  return (
    <ul className="grid h-[42px] w-full min-w-[1170px] grid-cols-7 items-center border-b border-[#EAECF0] bg-white text-center text-[10px] last-of-type:border-none">
      <li className="h-full px-[24px] py-[12px]">{e.branch}</li>
      <li className="h-full border-l border-r border-[#E2E2E2] px-[24px] py-[12px]">
        {e.initiator}
      </li>
      <li className="h-full px-[24px] py-[12px]">{e.quantity}</li>
      <li className="h-full border-l border-r border-[#E2E2E2] px-[24px] py-[12px]">
        {e.batch}
      </li>
      <li className="h-full px-[24px] py-[12px]">{e.date}</li>
      <li className="flex h-full justify-center border-l border-r border-[#E2E2E2] px-[24px] py-[10px]">
        <p className="w-max rounded-[1rem] border border-[#EAECF0] bg-[#F9FAFB] px-2 py-[2px] text-[#344054]">
          Pending
        </p>
      </li>
      <li className="h-full px-[24px] py-[12px] font-bold text-[#014DAF]">
        <Link to="requestdetails" state={e}>
          View
        </Link>
      </li>
    </ul>
  );
}

export default PendingCard;
