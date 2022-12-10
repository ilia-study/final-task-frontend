import { tendersActions } from "../tenders/slice";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";
import { userActions } from "../user/slice";

const actions = {
  ...tendersActions,
  ...userActions
}

export const useActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(actions, dispatch);
}