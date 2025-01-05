import React from "react";

const HeaderBox = ({ title, subtext, user, type } : HeaderBoxProps) => {
  return <div className="header-box">
<h1 className="header-box-title">
  {title}
  {type === "greeting" && (
    <span className="text-bankGradient font-semibold font-roboto">{user}</span>
  )}
</h1>
<p className="header-box-subtext">{subtext}</p>
  </div>;
};

export default HeaderBox;
