import { combineReducers } from '@bigcommerce/data-store';
import { CheckoutActionType } from '../checkout';
import * as couponActionTypes from './coupon-action-types';

/**
 * @param {CouponState} state
 * @param {Action} action
 * @return {CouponState}
 */
export default function couponReducer(state = {}, action) {
    const reducer = combineReducers({
        data: dataReducer,
        errors: errorsReducer,
        statuses: statusesReducer,
    });

    return reducer(state, action);
}

/**
 * @private
 * @param {Coupon[]} state
 * @param {Action<Coupon[]>} action
 * @return {Coupon[]}
 */
function dataReducer(data, action) {
    switch (action.type) {
    case CheckoutActionType.LoadCheckoutSucceeded:
        return action.payload.coupons;

    default:
        return data;
    }
}

/**
 * @private
 * @param {Object} errors
 * @param {Action} action
 * @return {Object}
 */
function errorsReducer(errors = {}, action) {
    switch (action.type) {
    case couponActionTypes.APPLY_COUPON_REQUESTED:
    case couponActionTypes.APPLY_COUPON_SUCCEEDED:
        return { ...errors, applyCouponError: undefined };

    case couponActionTypes.APPLY_COUPON_FAILED:
        return { ...errors, applyCouponError: action.payload };

    case couponActionTypes.REMOVE_COUPON_REQUESTED:
    case couponActionTypes.REMOVE_COUPON_SUCCEEDED:
        return { ...errors, removeCouponError: undefined };

    case couponActionTypes.REMOVE_COUPON_FAILED:
        return { ...errors, removeCouponError: action.payload };

    default:
        return errors;
    }
}

/**
 * @private
 * @param {Object} statuses
 * @param {Action} action
 * @return {Object}
 */
function statusesReducer(statuses = {}, action) {
    switch (action.type) {
    case couponActionTypes.APPLY_COUPON_REQUESTED:
        return { ...statuses, isApplyingCoupon: true };

    case couponActionTypes.APPLY_COUPON_SUCCEEDED:
    case couponActionTypes.APPLY_COUPON_FAILED:
        return { ...statuses, isApplyingCoupon: false };

    case couponActionTypes.REMOVE_COUPON_REQUESTED:
        return { ...statuses, isRemovingCoupon: true };

    case couponActionTypes.REMOVE_COUPON_SUCCEEDED:
    case couponActionTypes.REMOVE_COUPON_FAILED:
        return { ...statuses, isRemovingCoupon: false };

    default:
        return statuses;
    }
}
