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

      let cardAddedToFav = state.cardData.filter((curElem) => {
        if (curElem.favorite) {
          return curElem;
        }
      });
      return {
        ...state,
        cardData: favIconClickedItem,
        favoritePageData: cardAddedToFav,
      };
    }
  }
  return state;
};

export default favReducer;
