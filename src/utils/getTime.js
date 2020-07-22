export const getTime = fn => {
  let interval = 100;
  setInterval(() => {
    const time = new Date();
    const minutes =
      time.getMinutes() < 10 ? `0${time.getMinutes()}` : time.getMinutes();
    fn(`${time.getHours()}:${minutes}`);
    interval = 100;
  }, interval);
};
