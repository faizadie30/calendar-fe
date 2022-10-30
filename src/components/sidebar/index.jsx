import { Accordion, Dropdown, DropdownButton } from 'react-bootstrap';
import Calendar from 'react-calendar';
import { useDispatch } from 'react-redux';
import { changeActionCreate } from '../../redux/Layout/LayoutSlice';
import './calendar.css';
import styles from './sidebar.module.css';

function Sidebar() {
  const dispatch = useDispatch();

  const handlerChooseDate = (val) => {
    console.log('val:', val);
  };

  const openAction = (val) => {
    dispatch(changeActionCreate(val));
  };

  return (
    <div
      className={`col-12 col-sm-12 col-md-4 col-xxl-3 col-lg-3 p-0 m-0 ${styles.sidebar} border-end`}
    >
      <div className={`d-flex flex-column`}>
        <div className="col-12">
          <div className="d-flex justify-content-center">
            <Calendar
              onChange={handlerChooseDate}
              className="calendar"
              locale="en"
            />
          </div>
        </div>
        <div className="col-12">
          <Accordion defaultActiveKey="0" flush className="mt-3">
            <Accordion.Item eventKey="0">
              <Accordion.Header>My Calenders</Accordion.Header>
              <Accordion.Body>
                <div className="mb-3">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value="event"
                      id="flexCheckDefault"
                    />
                    <label className="form-check-label">Event</label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value="task"
                      id="flexCheckDefault"
                    />
                    <label className="form-check-label">Task</label>
                  </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
