"use client";
import Header from "@/components/Header";
import { useEffect, useState } from "react";
import { DateRangePicker } from "rsuite";
import UsersTable from "@/components/UsersTable";

const defaultEndDate = new Date(); // Bugünkü tarih
const defaultStartDate = new Date(
  defaultEndDate.getTime() - 7 * 24 * 60 * 60 * 1000
); // Bugünden 7 gün önce

const defaultDateRange = [defaultStartDate, defaultEndDate];

export default function UsersPage() {
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

  function handleChangeDate(value) {
    setDateRangeValues(value);
  }
  return (
    <main className="w-full">
      <Header title={"Users"} />

      <div className="flex justify-end my-6">
        <DateRangePicker
          style={{ width: 250 }}
          menuStyle={{ color: "black" }}
          size="md"
          placeholder="Select Date Range"
          block
          format="dd MMM yy"
          placement="bottomEnd"
          preventOverflow
          showOneCalendar={showOneCalendar ? true : false}
          defaultValue={defaultDateRange}
          shouldDisableDate={(date) => date.getTime() > Date.now()}
          onChange={handleChangeDate}
        />
      </div>

      <UsersTable dateRangeValues={dateRangeValues} />
    </main>
  );
}
