import { ADD_RATING } from '../constants/ActionTypes';

const initialState = [
  {
    id:0,
    createdAt: '2017-06-06T04:26:53.120Z',
    moodRating: 5,
    energyRating: 1,
    stressRating: 4
  }
];

export default function ratings(state = initialState, action) {
  switch (action.type) {
    case ADD_RATING:
      return [
        {
          id: state.reduce((maxId, rating) => Math.max(rating.id, maxId), -1) + 1,
          createdAt: new Date(),
          moodRating: action.ratingObject.moodRating,
          energyRating: action.ratingObject.energyRating,
          stressRating: action.ratingObject.stressRating
        },
        ...state
      ];
    default:
        return state;
  }
}
