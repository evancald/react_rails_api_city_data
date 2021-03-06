import React from "react"
var moment = require('moment');


class Event extends React.Component {

  formatDate = function(d){
    return moment(d).format('MMMM Do YYYY, h:mm a')
  }

  render(){
    const {name, date, url, image_url, venue, venue_url} = this.props.data
    return (
      <React.Fragment>
        <div className='event mb-2'>
          <div className="image-holder">
            <a href={url} target="_blank"><img src={image_url} alt={name}/></a>
          </div>

          <div className="text-holder">
            <h3><a href={url} target="_blank">{name}</a></h3>
            <p>{this.formatDate(date)} at <a href={venue_url} target="_blank">{venue}</a></p>
          </div>

        </div>
      </React.Fragment>
    )
  }
}

export default Event
