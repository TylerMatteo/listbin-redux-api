import { ADD_ITEM } from "../constants/action-types";
import { fromJS } from "immutable";

const initialState = fromJS({
    byId: {
        "item1": {
            id: "item1",
            createdAt: Date.now(),
            createdBy: "Tyler",
            title: "Here's a meme",
            content: "This is a test"
        },
        "item2": {
            id: "item2",
            createdAt: Date.now(),
            createdBy: "Tyler",
            title: "Here's another meme",
            content: "This is also a test"
        },
        "item3": {
            id: "item3",
            createdAt: Date.now(),
            createdBy: "Tyler",
            title: "Todo 1",
            content: "Take out the trash"
        },
        "item4": {
            id: "item4",
            createdAt: Date.now(),
            createdBy: "Tyler",
            title: "Todo 2",
            content: "Clean the kitchen"
        },
        "item5": {
            id: "item5",
            createdAt: Date.now(),
            createdBy: "Tyler",
            title: "The Shins",
            content: "Australia, New Slang, Young Pilgrims"
        },
        "item6": {
            id: "item6",
            createdAt: Date.now(),
            createdBy: "Tyler",
            title: "The Decemberists",
            content: "The Crane Wife 3, O Valencia!, Calamity Song"
        },
    }
});

function itemReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_ITEM:
            return {
                
            }
        default:
            return state;
    }
};

export default itemReducer;