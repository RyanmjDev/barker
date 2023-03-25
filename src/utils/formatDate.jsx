import moment from 'moment';

export default function formatDate(dateString) {
  const date = moment(dateString);
  const now = moment();
  const duration = moment.duration(now.diff(date));

  if (duration.asMinutes() < 60) {
    return `${Math.round(duration.asMinutes())}m`;
  } else if (duration.asHours() < 24) {
    return `${Math.round(duration.asHours())}h`;
  } else {
    return `${Math.round(duration.asDays())}d`;
  }
}

