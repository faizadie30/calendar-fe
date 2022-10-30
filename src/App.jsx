import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, Modal } from 'react-bootstrap';
import 'react-calendar/dist/Calendar.css';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import BigCalendar from './components/bigCalendar';
import Meta from './components/meta/';
import Sidebar from './components/sidebar';
import {
  resetChooseDate,
  saveData,
  scheduleSelector,
} from './redux/Schedules/ScheduleSlice';
import { FaSave } from 'react-icons/fa';
import { useRef, useState } from 'react';

const { VITE_APP_NAME } = import.meta.env;

function App() {
  const { isModalForm, startDate, endDate } = useSelector(scheduleSelector);
  const [valueChoose, setValueChoose] = useState(1);
  const dispatch = useDispatch();
  const refTitle = useRef('');

  const handlerCloseForm = () => {
    dispatch(resetChooseDate());
  };

  const handlerChooseType = (event) => {
    setValueChoose(event.target.value);
  };

  const handlerSave = () => {
    const title = refTitle.current.value;
    const type = valueChoose.toString();
    if (!title) {
      return alert('please enter title!');
    }

    if (!type) {
      return alert('please enter type!');
    }

    dispatch(saveData({ title, type, startDate, endDate }));
  };

  return (
    <>
      <Meta title={VITE_APP_NAME} />
      <div className="container-fluid">
        <div className="row flex-nowrap border-end">
          <Sidebar />
          <BigCalendar />
          <Modal show={isModalForm} onHide={handlerCloseForm}>
            <Modal.Header closeButton>
              <Modal.Title>Create</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Title</Form.Label>
                  <Form.Control
                    ref={refTitle}
                    type="text"
                    placeholder="Enter Title"
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Type</Form.Label>
                  <Form.Select
                    aria-label="Default select example"
                    onChange={handlerChooseType}
                  >
                    <option value="1">Event</option>
                    <option value="2">Task</option>
                  </Form.Select>
                </Form.Group>
                <div className="d-grid gap-2">
                  <Button
                    variant="primary"
                    type="button"
                    onClick={() => handlerSave()}
                    size="md"
                  >
                    <FaSave /> Save
                  </Button>
                </div>
              </Form>
            </Modal.Body>
          </Modal>
        </div>
      </div>
    </>
  );
}

export default App;
