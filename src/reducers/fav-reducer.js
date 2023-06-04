// import { cardData } from "../data";

const favReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_ICON": {
      //   let { favorite } = state.cardData;
      let favIconClickedItem = state.cardData.map((curElem) => {
        if (curElem.id === action.payload) {
          return {
            ...curElem,
            favorite: !curElem.favorite,
          };
        } else {
          return curElem;
        }
      });

      // let cardAddedToFav = state.cardData.filter((curElem) => {
      //   if (curElem.favorite) {
      //     return curElem;
      //   }
      // });

      // let favItemCount = cardAddedToFav.length;
      return {
        ...state,
        cardData: favIconClickedItem,
        filteredArray: favIconClickedItem,
      };
    }
    case "SEARCH_DATA": {
      // console.log(action.payload);
      // state.filteredArray = state.cardData;
      const newData = state.cardData.filter((curElem) => {
        if (
          curElem.title.toLowerCase().includes(action.payload.toLowerCase())
        ) {
          return curElem;
        } else if (action.payload === " ") {
          return curElem;
        }
      });
      // console.log("data", newData);
      return {
        ...state,
        filteredArray: newData,
      };
    }
  }
  return state;
};

export default favReducer;
