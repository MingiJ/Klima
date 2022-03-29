import React from "react";
import { BiUserCircle, BiTime } from "react-icons/bi";
import { ImLocation2 } from "react-icons/im";
import { MdDateRange } from "react-icons/md";
import "./Events.css";

const categories =[
  {
    name:"Water"
  },
  {
    name:"Degradation",
  },
  {
    name:"Recycling"
  }
]

const Events = () => {
  return (
    <div className="container events">
      <div className="events__header">
        <div className="events__header-text">
          <h3>Events</h3>
        </div>
        <div className="events__header-desc">
          <p className="text-black">
            The Events are Organized by different Bodies and Organisations to
            Mitigate Climate Change
          </p>
        </div>
      </div>
      <div className="container events__body">
        <div className="row events__body-header">
          <h3>Upcoming Events</h3>
          <div className="events__body-border"></div>
        </div>
      </div>

      <div className="events__body-filters">
        <h6 className="text-muted events__body_filter_text"> Filter By:-</h6>
        {
          categories.map((cat) =>{
            return(
              <div className="events__body-filter-item">
                  { cat.name }
              </div>
            )
          })
        }
      </div>

      {/* iteration begin here  */}

      <div className="row events_body-single">
        <div className="col-md-5">
          <img
            className="events__body-img"
            src="https://images.pexels.com/photos/6742721/pexels-photo-6742721.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt=""
          />
        </div>
        <div className="col-md-7">
          <h5>
            <BiUserCircle className="icon" />
            Green Belt Movement
          </h5>
          <div className="events__body-event-desc">
            <p>
              Join us we discuss Climate Change.Those with good and mind blowing
              ides will be rewareded
            </p>
          </div>

          <div className="events__body-venue">
            <h5>
              <ImLocation2 className="icon" />
              Zoom Meeting
            </h5>
          </div>

          <div className="events__body-venue">
            <h5>
              <MdDateRange className="icon" />
              30th March , 2022
            </h5>
          </div>

          <div className="events__body-event-time">
            <h5>
              <BiTime className="icon" />
              12:00pm - 2:00pm
            </h5>
          </div>

          <div className="events_body-join">
            <a href="#">Join Us</a>
          </div>
        </div>
      </div>

      <div className="row events_body-single">
        <div className="col-md-5">
          <img
            className="events__body-img"
            src="https://images.pexels.com/photos/1046212/pexels-photo-1046212.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt=""
          />
        </div>
        <div className="col-md-7">
          <h5>
            <BiUserCircle className="icon" />
            Wangari Mathaai Foundation
          </h5>
          <div className="events__body-event-desc">
            <p>
              Due to Drastic Climate Change,We have organized this event to
              train you on some of the ways to overcome this
            </p>
          </div>

          <div className="events__body-venue">
            <h5>
              <ImLocation2 className="icon" />
              Zoom Meeting
            </h5>
          </div>
          <div className="events__body-venue">
            <h5>
              <MdDateRange className="mt-2 icon" />
              30th March , 2022
            </h5>
          </div>

          <div className="events__body-event-time">
            <h5>
              <BiTime className="icon" />
              12:00pm - 2:00pm
            </h5>
          </div>

          <div className="events_body-join">
            <a href="#">Join Us</a>
          </div>
        </div>
      </div>

      {/* the iteration to end here  */}
    </div>
  );
};

export default Events;
