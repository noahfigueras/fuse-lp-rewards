import { action, createTransactionRequestTypes, requestAction } from './utils'

export const WITHDRAW_STAKE = createTransactionRequestTypes('WITHDRAW_STAKE')
export const DEPOSIT_STAKE = createTransactionRequestTypes('DEPOSIT_STAKE')
export const APPROVE_TOKEN = createTransactionRequestTypes('APPROVE_TOKEN')
export const GET_TOKEN_ALLOWANCE = createTransactionRequestTypes('GET_TOKEN_ALLOWANCE')

export const withdrawStakeAndInterest = (amount) => action(WITHDRAW_STAKE.REQUEST, { amount })
export const depositStake = (amount) => action(DEPOSIT_STAKE.REQUEST, { amount })
export const approveToken = (tokenAddress, amountToApprove) => requestAction(APPROVE_TOKEN, { tokenAddress, amountToApprove })
export const getTokenAllowance = (tokenAddress) => requestAction(GET_TOKEN_ALLOWANCE, { tokenAddress })