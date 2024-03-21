export const photoReducer = (state = [], action) => {
  switch (action.type) {
    case "[PHOTO] Get All":
      return action.payload;
    case "[PHOTO] Like/dislike Photo":
      return state.map(photo =>
        photo.id === action.payload
          ? { ...photo, liked: !photo.liked }
          : photo
      );
    default:
      return state; 
  }
};