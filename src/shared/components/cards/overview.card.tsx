"use client";
import useSubscribersAnalytics from "@/shared/hooks/useSubscribersAnalytics";
import { ICONS } from "@/shared/utils/icons";

const DashboardOverViewCard = () => {
    const { subscribersData, loading } = useSubscribersAnalytics();
    const lastMonthSubscribers = !loading && subscribersData?.last7Months?.length > 0
        ? subscribersData.last7Months[subscribersData.last7Months.length - 1].count
        : 0;

    const previousLastMonthSubscribers = !loading && subscribersData?.last7Months?.length > 1
        ? subscribersData.last7Months[subscribersData.last7Months.length - 2].count
        : 0;

    let comparePercentage = 0;

    if (previousLastMonthSubscribers > 0) {
        comparePercentage =
            ((lastMonthSubscribers - previousLastMonthSubscribers) / previousLastMonthSubscribers) *
            100;
    } else {
        comparePercentage = 100;
    }

    return (
        <div className="w-full xl:py-4 flex bg-white border rounded">
            {/* Subscribers */}
            <div className="w-[33.33%] border-r p-5 text-lg">
                <h5 className="text-lg">Subscribers</h5>
                <div className="w-full flex items-center justify-between">
                    <span className="font-medium pt-2">
                        {loading ? "..." : lastMonthSubscribers}
                    </span>
                    <div className="h-[30px] flex p-2 items-center bg-[#DCFCE6] rounded-full">
                        <span className="text-[#21C55D]">{ICONS.topArrow}</span>
                        <span className="text-sm pl-1">{comparePercentage.toFixed(2)}%</span>
                    </div>
                </div>
                <small className="block text-sm opacity-[.7] pt-2">
                    from {previousLastMonthSubscribers} (last 4 weeks)
                </small>
            </div>
            {/* Open Rate */}
            <div className="w-[33.33%] border-r p-5 text-lg">
                <h5 className="text-lg">Open Rate</h5>
                <div className="w-full flex items-center justify-between">
                    <span className="font-medium pt-2">0</span>
                    <div className="h-[30px] flex p-3 items-center bg-[#F3F4F6] rounded-full">
                        <span className="text-xl">-</span>
                        <span className="text-sm pl-1">0%</span>
                    </div>
                </div>
                <small className="block text-sm opacity-[.7] pt-2">
                    from 0 (last 4 weeks)
                </small>
            </div>
            {/* Click Rate */}
            <div className="w-[33.33%] border-r p-5 text-lg">
                <h5 className="text-lg">Click Rate</h5>
                <div className="w-full flex items-center justify-between">
                    <span className="font-medium pt-2">0</span>
                    <div className="h-[30px] flex p-3 items-center bg-[#F3F4F6] rounded-full">
                        <span className="text-xl">-</span>
                        <span className="text-sm pl-1">0%</span>
                    </div>
                </div>
                <small className="block text-sm opacity-[.7] pt-2">
                    from 0 (last 4 weeks)
                </small>
            </div>
        </div>
    );
};

export default DashboardOverViewCard;
