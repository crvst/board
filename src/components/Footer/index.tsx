import * as React from "react";
import * as meta from "../../constants/meta";
import * as strings from "../../constants/strings";

const Footer: React.SFC<{}> = () => {
  return <footer className="ph3 pv2">
    <a
      className="link black hover-yellow"
      href={`mailto:${meta.AUTHOR_EMAIL}`}
    >
      {strings.AUTHOR}
    </a>
  </footer>;
};

export default Footer;
