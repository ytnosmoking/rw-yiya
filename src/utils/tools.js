

export const dateDiff = (startTime = '', endTime = '') => {
  let date1 = startTime ? new Date(startTime.replace(/-/g, "/")).getTime() : new Date().getTime()
  let date2 = new Date(endTime.replace(/-/g, "/")).getTime();
  let total = (date2 - date1) / 1000;
  var day = parseInt(total / (24 * 60 * 60));//计算整数天数
  var afterDay = total - day * 24 * 60 * 60;//取得算出天数后剩余的秒数
  var hour = parseInt(afterDay / (60 * 60));//计算整数小时数
  var afterHour = total - day * 24 * 60 * 60 - hour * 60 * 60;//取得算出小时数后剩余的秒数
  var min = parseInt(afterHour / 60);//计算整数分
  //var afterMin = total - day * 24 * 60 * 60 - hour * 60 * 60 - min * 60;//取得算出分后剩余的秒数
  return day + '天' + Math.abs(hour) + '时' + Math.abs(min) + '分'
}

const PrefixInteger = (num, length) => {
  return ("0000000000000000" + num).substr(-length);
}

export const dateTool = (string = '') => {
  let date = new Date(string.replace(/-/g, "/"));
  let dateStr = date.toLocaleDateString();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  return dateStr + ' ' + hours + ':' + PrefixInteger(minutes, 2)
}