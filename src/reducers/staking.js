import * as staking from '@/actions/staking'

export default (state = {}, action) => {
  switch (action.type) {
    case staking.GET_STAKE_DATA.SUCCESS:
      return { ...state, ...action.response }
    default:
      return state
  }
}