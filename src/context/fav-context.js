import { createContext, useContext, useReducer } from "react";
import PropTypes from "prop-types";
import reducer from "../reducers/fav-reducer";

const FavContext = createContext();

const initialState = {
  cardData: [
    {
      id: 1,
      url: "/images/destination/card-img1Medium.jpeg",
      title: "asakusa",
      description: "Lorem Ipsum Lorem Ipsum Lorem Ipsum",
      favorite: false,
    },
    {
      id: 2,
      url: "/images/destination/card-img2Medium.jpeg",
      title: "shibuya",
      description: "Lorem Ipsum Lorem Ipsum Lorem Ipsum",
      favorite: false,
    },
    {
      id: 3,
      url: "/images/destination/card-img3Medium.jpeg",
      title: "kyoto",
      description: "Lorem Ipsum Lorem Ipsum Lorem Ipsum",
      favorite: false,
    },
    {
      id: 4,
      url: "/images/destination/card-img4Medium.jpeg",
      title: "yokohama",
      description: "Lorem Ipsum Lorem Ipsum Lorem Ipsum",
      favorite: false,
    },
    {
      id: 5,
      url: "/images/destination/card-img5Medium.jpeg",
      title: "osaka",
      description: "Lorem Ipsum Lorem Ipsum Lorem Ipsum",
      favorite: false,
    },
    {
      id: 6,
      url: "/images/destination/card-img6Medium.jpeg",
      title: "nara",
      description: "Lorem Ipsum Lorem Ipsum Lorem Ipsum",
      favorite: false,
    },
    {
      id: 7,
      url: "/images/destination/card-img7Medium.jpeg",
      title: "ginza",
      description: "Lorem Ipsum Lorem Ipsum Lorem Ipsum",
      favorite: false,
    },
    {
      id: 8,
      url: "/images/destination/card-img8Medium.jpeg",
      title: "akihabara",
      description: "Lorem Ipsum Lorem Ipsum Lorem Ipsum",
      favorite: false,
    },
    {
      id: 9,
      url: "/images/destination/card-img9Medium.jpeg",
      title: "sapporo",
      description: "Lorem Ipsum Lorem Ipsum Lorem Ipsum",
      favorite: false,
    },
    {
      id: 10,
      url: "/images/destination/card-img10Medium.jpeg",
      title: "Mt Fuji",
      description: "Lorem Ipsum Lorem Ipsum Lorem Ipsum",
      favorite: false,
    },
    {
      id: 11,
      url: "/images/destination/card-img11Medium.jpeg",
      title: "kabukicho",
      description: "Lorem Ipsum Lorem Ipsum Lorem Ipsum",
      favorite: false,
    },
    {
      id: 12,
      url: "/images/destination/card-img12Medium.jpeg",
      title: "tokyo",
      description: "Lorem Ipsum Lorem Ipsum Lorem Ipsum",
      favorite: false,
    },
  ],
  filteredArray: [
    {
      id: 1,
      url: "/images/destination/card-img1Medium.jpeg",
      title: "asakusa",
      description: "Lorem Ipsum Lorem Ipsum Lorem Ipsum",
      favorite: false,
    },
    {
      id: 2,
      url: "/images/destination/card-img2Medium.jpeg",
      title: "shibuya",
      description: "Lorem Ipsum Lorem Ipsum Lorem Ipsum",
      favorite: false,
    },
    {
      id: 3,
      url: "/images/destination/card-img3Medium.jpeg",
      title: "kyoto",
      description: "Lorem Ipsum Lorem Ipsum Lorem Ipsum",
      favorite: false,
    },
    {
      id: 4,
      url: "/images/destination/card-img4Medium.jpeg",
      title: "yokohama",
      description: "Lorem Ipsum Lorem Ipsum Lorem Ipsum",
      favorite: false,
    },
    {
      id: 5,
      url: "/images/destination/card-img5Medium.jpeg",
      title: "osaka",
      description: "Lorem Ipsum Lorem Ipsum Lorem Ipsum",
      favorite: false,
    },
    {
      id: 6,
      url: "/images/destination/card-img6Medium.jpeg",
      title: "nara",
      description: "Lorem Ipsum Lorem Ipsum Lorem Ipsum",
      favorite: false,
    },
    {
      id: 7,
      url: "/images/destination/card-img7Medium.jpeg",
      title: "ginza",
      description: "Lorem Ipsum Lorem Ipsum Lorem Ipsum",
      favorite: false,
    },
    {
      id: 8,
      url: "/images/destination/card-img8Medium.jpeg",
      title: "akihabara",
      description: "Lorem Ipsum Lorem Ipsum Lorem Ipsum",
      favorite: false,
    },
    {
      id: 9,
      url: "/images/destination/card-img9Medium.jpeg",
      title: "sapporo",
      description: "Lorem Ipsum Lorem Ipsum Lorem Ipsum",
      favorite: false,
    },
    {
      id: 10,
      url: "/images/destination/card-img10Medium.jpeg",
      title: "Mt Fuji",
      description: "Lorem Ipsum Lorem Ipsum Lorem Ipsum",
      favorite: false,
    },
    {
      id: 11,
      url: "/images/destination/card-img11Medium.jpeg",
      title: "kabukicho",
      description: "Lorem Ipsum Lorem Ipsum Lorem Ipsum",
      favorite: false,
    },
    {
      id: 12,
      url: "/images/destination/card-img12Medium.jpeg",
      title: "tokyo",
      description: "Lorem Ipsum Lorem Ipsum Lorem Ipsum",
      favorite: false,
    },
  ],
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

  const onSearchInputHandler = (event) => {
    const value = event.target.value;
    // console.log(value);
    return dispatch({
      type: "SEARCH_DATA",
      payload: value,
    });
  };

  return (
    <FavContext.Provider
      value={{ ...state, onFavIconClickHandler, onSearchInputHandler }}
    >
      {children}
    </FavContext.Provider>
  );
};

const useFavContext = () => {
  return useContext(FavContext);
};

FavProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export { useFavContext, FavProvider };
