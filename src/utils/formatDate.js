import moment from 'moment';

export function timeSince(dateString) {
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
};


export function formatDate(dateString) {
  const date = new Date(dateString);
  const time = date.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
  const dateStr = date.toLocaleDateString([], { month: 'short', day: 'numeric', year: 'numeric' });
  return(`${time} · ${dateStr}`);
};