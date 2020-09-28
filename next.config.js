const withTM = require("next-transpile-modules")([
  "@fullcalendar/core",
  "@fullcalendar/react",
  "@fullcalendar/common",
  "@fullcalendar/daygrid",
  "@fullcalendar/timegrid",
]);

module.exports = withTM();
