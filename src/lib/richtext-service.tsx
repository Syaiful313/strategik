import { Options } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";

export const RICHTEXT_SERVICE: Options = {
  renderNode: {
    [BLOCKS.HEADING_2]: (_node, children) => {
      return (
        <h2 className="my-5 text-xl font-bold md:my-10 md:text-6xl">
          {children}
        </h2>
      );
    },
    [BLOCKS.HEADING_3]: (_node, children) => {
      return <h3 className="my-5 text-lg font-bold md:text-5xl">{children}</h3>;
    },
    [BLOCKS.PARAGRAPH]: (_node, children) => {
      return <p className="my-5md:my-10 md:text-2xl text-sm">{children}</p>;
    },
  },
};
