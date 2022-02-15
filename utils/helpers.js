const dayjs = require('dayjs');
const relativeTime = require('dayjs/plugin/relativeTime');
dayjs.extend(relativeTime);

module.exports = {
  timeFromNow: (time) => {
    console.log(time);
    return dayjs(time).fromNow()
  },
};
