import React, { useEffect, useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import {
  chooseDate,
  getDataAll,
  scheduleSelector,
} from '../../redux/Schedules/ScheduleSlice';
import { changeFormatDate } from '../../helpers';

function BigCalendar() {
  /* config with reduxer & selector */
  const dispatch = useDispatch();
  const { eventDates } = useSelector(scheduleSelector);
  const [dataEvents, setDataEvents] = useState();

  useEffect(() => {
    dispatch(getDataAll());
  }, []);

  /* config calendar */
  const localizer = momentLocalizer(moment);

  /* handler */
  const handlerSelectEvent = (event) => {
    console.log('event:', event);
  };

  const handlerSelectSlot = ({ start, end }) => {
    const data = {
      startDate: changeFormatDate(start),
      endDate: changeFormatDate(end),
    };
    dispatch(chooseDate(data));
  };

  useEffect(() => {
    if (eventDates.length > 0) {
      let data = [];

      eventDates.map((object) => {
        let dataCondition = {
          title: object.title,
          start: changeFormatDate(object.start_date),
          end: changeFormatDate(object.end_date),
        };

        return data.push(dataCondition);
      });
      setDataEvents(data);
    } else {
      setDataEvents([]);
    }
  }, [eventDates]);

  return (
    <>
      <div className="col-12 col-sm-12 col-md-8 col-lg-9 col-xl-9 col-xxl-9 py-3">
        <div className="row">
          <div className="col-12">
            <Calendar
              selectable
              localizer={localizer}
              events={dataEvents}
              startAccessor="start"
              style={{ height: '100vh' }}
              endAccessor="end"
              onSelectEvent={(event) => handlerSelectEvent(event)}
              onSelectSlot={handlerSelectSlot}
              defaultDate={moment().toDate()}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default BigCalendar;
