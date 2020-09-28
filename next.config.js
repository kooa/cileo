const withTM = require("next-transpile-modules")([
  "@fullcalendar/react",
  "@fullcalendar/common",
  "@fullcalendar/daygrid",
]);

module.exports = withTM();
