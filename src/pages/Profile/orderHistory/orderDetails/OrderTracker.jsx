import { Check } from "lucide-react";

const OrderTracker = ({ steps }) => {
  return (
    <div className="relative w-10/12 mx-auto my-4 pb-12  ">
      <div className="flex justify-between items-center">
        {steps.map((r) => (
          <div className="flex justify-center">
            <div
              className={`${
                r.status === "completed"
                  ? "bg-primary text-white"
                  : r.status === "current"
                  ? "bg-primary text-white"
                  : " text-primary"
              } rounded-full size-10 relative flex justify-center items-center text-sm p-2 `}
            >
              {r.status === "upcoming" && (
                <svg
                  class="absolute top-0 left-0 -z-[1]  w-full h-full rounded-full bg-white stroke-primary"
                  viewBox="0 0 100 100"
                >
                  <circle cx="50" cy="50" r="45" fill="none" stroke="" stroke-width="2" stroke-dasharray="15 10" />
                </svg>
              )}
              {r.status === "completed" ? <Check /> : r.id.toString().padStart(2, "0")}
            </div>
            <p
              className={`${
                r.status === "completed"
                  ? "text-primary-hard"
                  : r.status === "current"
                  ? "text-primary-hard font-medium"
                  : " text-gray-800"
              } absolute mt-10 text-xs sm:text-sm text-nowrap`}
            >
              {r.name}
            </p>
          </div>
        ))}
      </div>
      <div className="absolute top-4 h-2 left-0 -z-[2] w-full  rounded-full bg-gray-50">
        <div
          className={`h-full  rounded-full bg-primary`}
          style={{
            width: (100 / ((steps.length - 1) * 2)) * (steps.find((r) => r.status === "current").id * 2 - 1) + "%",
          }}
        ></div>
      </div>
    </div>
  );
};

export default OrderTracker;
