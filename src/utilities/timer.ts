let startTime: number = 0;
let elapsed: number = 0;
let timer: NodeJS.Timeout | undefined;

export const startTimer = () => {
  startTime = Date.now() - elapsed;
  timer = setInterval(() => {
    elapsed = Date.now() - startTime;
  }, 1);
};

export const stopTimer = () => {
  clearInterval(timer);
  return elapsed; // return the final time in milliseconds
};

export const getCurrentTime = () => elapsed;

export const resetTimer = () => {
  clearInterval(timer);
  startTime = 0;
  elapsed = 0;
};

export const formatTime = (time: number) => {
  const seconds = Math.floor(time / 1000);
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${String(minutes).padStart(2, "0")}:${String(
    remainingSeconds
  ).padStart(2, "0")}`;
};
