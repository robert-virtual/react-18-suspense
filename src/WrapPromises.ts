export interface IWrapPromiseRes<T> {
  read: () => T;
}
export const wrapPromise = <T>(promise: Promise<T>): IWrapPromiseRes<T> => {
  let status: "pending" | "error" | "success" = "pending";
  let res: T | any;
  let suspender = promise.then(
    (r) => {
      status = "success";
      res = r;
    },
    (err) => {
      status = "error";
      res = err;
    }
  );
  return {
    read(): T {
      if (status == "pending") throw suspender;
      if (status == "error") throw res;
      return res;
    },
  };
};
