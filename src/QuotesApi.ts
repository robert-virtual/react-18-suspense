import { IWrapPromiseRes, wrapPromise } from "./WrapPromises";

export interface IQuote {
  id: string;
  en: string;
  author: string;
}
const fetchQuote = (): Promise<IQuote> => {
  return fetch(
    "https://programming-quotes-api.herokuapp.com/quotes/random"
  ).then((res) => res.json());
};

export interface IResource {
  quote: IWrapPromiseRes<IQuote>;
  quote2: IWrapPromiseRes<IQuote>;
}
export const createResource = (): IResource => {
  return {
    quote2: wrapPromise(fetchQuote()),
    quote: wrapPromise(fetchQuote()),
  };
};
