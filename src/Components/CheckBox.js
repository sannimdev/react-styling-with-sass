import React from "react";
import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";
import styles from "./Checkbox.module.css";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function CheckBox({ checked, children, ...rest }) {
  console.log(styles);
  return (
    <div className={cx("checkbox", "test", "a", "b")}>
      <label>
        <input type="checkbox" checked={checked} {...rest} />
        <div className={styles.icon}>
          {checked ? <MdCheckBox className={cx("checked")} /> : <MdCheckBoxOutlineBlank />}
        </div>
      </label>
      <span>{children}</span>
    </div>
  );
}

export default CheckBox;
