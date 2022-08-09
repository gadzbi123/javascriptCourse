/* eslint-disable no-useless-catch */
import { TIMEOUT_SECS } from './config';
export const getJSON = async function (url) {
  try {
    const fetchPro = fetch(url);
    const res = await Promise.race([fetchPro, timeout(TIMEOUT_SECS)]);
    if (!res.ok) throw new Error(`${data.message} (${res.status})`);
    const data = await res.json();
    return data;
  } catch (e) {
    throw e;
  }
};

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};
