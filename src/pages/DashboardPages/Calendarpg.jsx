import React, { useState } from "react";
import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Header } from '../../components/content';
import { events } from "../../data/events";

const locales = {
  "en-GB": require("date-fns/locale/en-GB"),
};
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

function Calendarpg() {

  return (
    <div className="m-2 md:m-10 mt-24 p-4 md:p-10 bg-white rounded-3xl">
      <Header category="Planning" title="Calendar" />
   
      <div className="mt-6">
        <Calendar
          localizer={localizer}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500, margin: "50px" }}
        />
      </div>
    </div>
  );
}

export default Calendarpg;