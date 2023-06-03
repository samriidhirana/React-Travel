import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducers/fav-reducer";

const FavContext = createContext();

const initialState = {
  cardData: [
    {
      id: 1,
      url: "/images/destination/card-img1.jpg",
      title: "asakusa",
      description: "Lorem Ipsum Lorem Ipsum Lorem Ipsum",
      favorite: false,
    },
    {
      id: 2,
      url: "/images/destination/card-img2.jpg",
      title: "shibuya",
      description: "Lorem Ipsum Lorem Ipsum Lorem Ipsum",
      favorite: false,
    },
    {
      id: 3,
      url: "/images/destination/card-img3.jpg",
      title: "kyoto",
      description: "Lorem Ipsum Lorem Ipsum Lorem Ipsum",
      favorite: false,
    },
    {
      id: 4,
      url: "/images/destination/card-img4.jpg",
      title: "yokohama",
      description: "Lorem Ipsum Lorem Ipsum Lorem Ipsum",
      favorite: false,
    },
    {
      id: 5,
      url: "/images/destination/card-img5.jpg",
      title: "osaka",
      description: "Lorem Ipsum Lorem Ipsum Lorem Ipsum",
      favorite: false,
    },
    {
      id: 6,
      url: "/images/destination/card-img6.jpg",
      title: "nara",
      description: "Lorem Ipsum Lorem Ipsum Lorem Ipsum",
      favorite: false,
    },
    {
      id: 7,
      url: "/images/destination/card-img7.jpg",
      title: "ginza",
      description: "Lorem Ipsum Lorem Ipsum Lorem Ipsum",
      favorite: false,
    },
    {
      id: 8,
      url: "/images/destination/card-img8.jpg",
      title: "akihabara",
      description: "Lorem Ipsum Lorem Ipsum Lorem Ipsum",
      favorite: false,
    },
    {
      id: 9,
      url: "/images/destination/card-img9.jpg",
      title: "sapporo",
      description: "Lorem Ipsum Lorem Ipsum Lorem Ipsum",
      favorite: false,
    },
    {
      id: 10,
      url: "/images/destination/card-img10.jpg",
      title: "Mt Fuji",
      description: "Lorem Ipsum Lorem Ipsum Lorem Ipsum",
      favorite: false,
    },
    {
      id: 11,
      url: "/images/destination/card-img11.jpg",
      title: "kabukicho",
      description: "Lorem Ipsum Lorem Ipsum Lorem Ipsum",
      favorite: false,
    },
    {
      id: 12,
      url: "/images/destination/card-img12.jpg",
      title: "tokyo",
      description: "Lorem Ipsum Lorem Ipsum Lorem Ipsum",
      favorite: false,
    },
  ],
  favoritePageData: [],
  totalFavItems: 0,
};

const FavProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const onFavIconClickHandler = (id) => {
    // console.log(id);
    return dispatch({
      type: "CHANGE_ICON",
      payload: id,
    });
  };

  useEffect(() => {
    onFavIconClickHandler();
  }, [state.cardData]);

  return (
    <FavContext.Provider value={{ ...state, onFavIconClickHandler }}>
      {children}
    </FavContext.Provider>
  );
};

const useFavContext = () => {
  return useContext(FavContext);
};

export { useFavContext, FavProvider };
