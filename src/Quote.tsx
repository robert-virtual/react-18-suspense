import { FC, useState } from "react";
import { IQuote, IResource } from "./QuotesApi";
import { IWrapPromiseRes } from "./WrapPromises";

interface Props {
  resource: IWrapPromiseRes<IQuote>;
}
export const Quote: FC<Props> = ({ resource }) => {
  const quote = resource.read();
  const [quoteText, setQuoteText] = useState(quote.en);

  return (
    <>
      <p>{quoteText}</p>
      <input
        type={"text"}
        value={quoteText}
        onChange={({ target }) => setQuoteText(target.value)}
      />
      <p>{quote.author}</p>
    </>
  );
};
