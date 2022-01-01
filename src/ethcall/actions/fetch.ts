import { createAction } from '@reduxjs/toolkit';
import { name } from '../common';
import { EthCall, validate } from '../model/interface';

/** @internal */
export const FETCH = `${name}/FETCH`;
/** @category Actions */
export const fetch = createAction(FETCH, (payload: EthCall) => {
    return { payload: validate(payload) };
});

/** @internal */
export type FetchAction = ReturnType<typeof fetch>;
/** @internal */
export const isFetchAction = fetch.match;

export default fetch;
