const dayjs = require("dayjs");

/* defaultFormat could be any other valid dayjs format,
 * or null, in which case we’d get dayjs().format() */
const defaultFormat = "DD MMM YYYY";

function dayjsFilter(date, format = defaultFormat) {
  return dayjs(date).format(format);
}

var advancedFormat = require("dayjs/plugin/advancedFormat");
dayjs.extend(advancedFormat);
dayjs().format("Q Do k kk X x");

module.exports = dayjsFilter;