import React from "react";
import module from "./todoHeader.module.scss";

function TodoHeader() {
  return (
    <div className={module.header}>
      <div className={[module["block"], module["category"]].join(" ")}>
        <p className={module.item}>Category</p>
      </div>
      <div className={[module["block"], module["task"]].join(" ")}>
        <p className={module.item}>Task</p>
      </div>

      <div className={[module["block"], module["info"]].join(" ")}>
        <p className={[module["item"], module["as"]].join("")}>Status</p>
        <p className={module.item}>Action</p>
      </div>
    </div>
  );
}

export default TodoHeader;
