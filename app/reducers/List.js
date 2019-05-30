import { ADD_LIST, ADD_ITEM } from "../constants/action-types";
import { fromJS, Map } from "immutable";

const initialState = fromJS({
  byId: {
    list1: {
      id: "list1",
      name: "List 1",
      unit: "Meme",
      description: "A list of memes",
      createdBy: "Tyler",
      createdAt: Date.now(),
      items: ["item1", "item2"]
    },
    list2: {
      id: "list2",
      name: "List 2",
      unit: "Todos",
      description: "A list of todos",
      createdBy: "Tyler",
      createdAt: Date.now(),
      items: ["item3", "item4"]
    },
    list3: {
      id: "list3",
      name: "List 3",
      unit: "Bands",
      description: "A list of bands",
      createdBy: "Tyler",
      createdAt: Date.now(),
      items: ["item5", "item6"]
    }
  }
});

function listReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_LIST:
      return state.setIn(["byId", action.payload.id], Map(action.payload));
    case ADD_ITEM:
      return state.updateIn(["byId", action.payload.listId, "items"], arr =>
        arr.push(action.payload.item.id)
      );
    default:
      return state;
  }
}

export default listReducer;
