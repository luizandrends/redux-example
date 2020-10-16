import produce from 'immer';

const INITIAL_STATE = {
  techs: [],
};

export default function techs(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@tech/SIGN_IN_REQUEST': {
        const { techName } = action.payload;

        draft.techs.push(techName);

        break;
      }
      default:
        break;
    }
  });
}
