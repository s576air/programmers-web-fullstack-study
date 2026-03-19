import { useDispatch, useSelector, type TypedUseSelectorHook } from "react-redux";
import { AppDispatch, type RootState } from "../store";

// const dispatch = useDispatch();

const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
const useTypedDispatch = () => useDispatch<AppDispatch>();

// const logger = useTypedSelector((state) => state.logger);

