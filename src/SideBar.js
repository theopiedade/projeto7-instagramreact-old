import React from "react";
import Suggestions from "./Suggestions";
import User from "./User";

export default function SideBar() {
  return (
    <div class="sidebar">
      <User />
      <Suggestions />
    </div>
  );
}
