"use client";
import { useEffect, useState } from "react";
import { TagPicker } from "rsuite";
import { DateRangePicker } from "rsuite";
import Header from "@/components/Header";
import OverviewContent from "@/components/OverviewContent";

const platformData = ["Platform A", "Platform B", "Platform C"].map((item) => ({
  label: item,
  value: item,
}));

const defaultPlatform = [platformData[0].value];

const defaultEndDate = new Date(); // Bugünkü tarih
const defaultStartDate = new Date(
  defaultEndDate.getTime() - 7 * 24 * 60 * 60 * 1000
); // Bugünden 7 gün önce

const defaultDateRange = [defaultStartDate, defaultEndDate];

export default function Home() {
  const [platformSelectValues, setPlatformSelectValues] =useState(defaultPlatform);
  const [dateRangeValues, setDateRangeValues] = useState(defaultDateRange);
  const [showOneCalendar, setShowOneCalendar] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth <= 768;
      setShowOneCalendar(isMobile);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function handleChangePlatform(value) {
    setPlatformSelectValues(value);
  }
  function handleChangeDate(value) {
    setDateRangeValues(value);
  }

  return (
    <main className="">
      <Header title={"Overview"} />

      <div className="flex justify-end flex-wrap  gap-2 my-6">
        <TagPicker
          data={platformData}
          style={{ width: 250 }}
          size="md"
          defaultValue={defaultPlatform}
          onChange={handleChangePlatform}
        />
        <DateRangePicker
          style={{ width: 250 }}
          size="md"
          placeholder="Select Date Range"
          block
          format="dd MMM yy"
          placement="bottomEnd"
          showOneCalendar={showOneCalendar ? true : false}
          preventOverflow
          defaultValue={defaultDateRange}
          shouldDisableDate={(date) => date.getTime() > Date.now()}
          onChange={handleChangeDate}
        />
      </div>

      <OverviewContent
        platformSelectValues={platformSelectValues}
        dateRangeValues={dateRangeValues}
      />
    </main>
  );
}
