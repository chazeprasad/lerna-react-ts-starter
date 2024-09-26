import { createSlice, Dispatch } from "@reduxjs/toolkit";
import axios from "../../utils/axios";
import { ISampleState, ISampleItem } from "../../@types/sample";

// ----------------------------------------------------------------------

const initialState: ISampleState = {
  isLoading: false,
  error: null,
  items: [],
};

const slice = createSlice({
  name: "sample",
  initialState,
  reducers: {
    // START LOADING
    startLoading(state) {
      state.isLoading = true;
    },

    // HAS ERROR
    hasError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    // GET EVENTS
    getItemsSuccess(state, action) {
      state.isLoading = false;
      state.items = action.payload;
    },

    // CREATE EVENT
    createItemSuccess(state, action) {
      const newItem = action.payload;
      state.isLoading = false;
      state.items = [...state.items, newItem];
    },

    // UPDATE EVENT
    updateItemSuccess(state, action) {
      state.isLoading = false;
      state.items = state.items.map((item) => {
        if (item.id === action.payload.id) {
          return action.payload;
        }
        return item;
      });
    },

    // DELETE EVENT
    deleteItemSuccess(state, action) {
      const itemId = action.payload;
      state.items = state.items.filter((item) => item.id !== itemId);
    },
  },
});

// Reducer
export default slice.reducer;

// ----------------------------------------------------------------------

export function getItems() {
  return async (dispatch: Dispatch) => {
    dispatch(slice.actions.startLoading());
    try {
      const response = await axios.get("/api/sample/items");
      dispatch(slice.actions.getItemsSuccess(response.data.items));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}

// ----------------------------------------------------------------------

export function createItem(newItem: ISampleItem) {
  return async (dispatch: Dispatch) => {
    dispatch(slice.actions.startLoading());
    try {
      const response = await axios.post("/api/sample/items/new", newItem);
      dispatch(slice.actions.createItemSuccess(response.data.item));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}

// ----------------------------------------------------------------------

export function updateItem(
  itemId: string,
  item: Partial<{
    allDay: boolean;
    start: Date | string | number | null;
    end: Date | string | number | null;
  }>
) {
  return async (dispatch: Dispatch) => {
    dispatch(slice.actions.startLoading());
    try {
      const response = await axios.post("/api/sample/items/update", {
        itemId,
        item,
      });
      dispatch(slice.actions.updateItemSuccess(response.data.item));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}

// ----------------------------------------------------------------------

export function deleteItem(itemId: string) {
  return async (dispatch: Dispatch) => {
    dispatch(slice.actions.startLoading());
    try {
      await axios.post("/api/sample/items/delete", { itemId });
      dispatch(slice.actions.deleteItemSuccess(itemId));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}
