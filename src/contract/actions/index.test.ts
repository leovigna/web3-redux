import { assert } from 'chai';
import BlockNumberAbi from '../../abis/BlockNumber.json';

import { name } from '../common';
import { networkId } from '../../test/data';

import { Contract, ContractId } from '../model/interface';

import { create, CREATE, CreateAction, isCreateAction } from './create';
import { update, UPDATE, UpdateAction, isUpdateAction } from './update';
import { remove, REMOVE, RemoveAction, isRemoveAction } from './remove';

describe(`${name}.actions`, () => {
    const address = '0x0000000000000000000000000000000000000001';
    const item: Contract = {
        networkId,
        address,
        abi: BlockNumberAbi.abi as any,
    };
    const id: ContractId = { networkId, address };
    const itemWithId = {
        ...item,
        id: `${networkId}-${address}`,
        eventAbiBySignature: {
            '0xac3e966f295f2d5312f973dc6d42f30a6dc1c1f76ab8ee91cc8ca5dad1fa60fd': {
                anonymous: false,
                inputs: [
                    {
                        indexed: true,
                        internalType: 'uint256',
                        name: 'value',
                        type: 'uint256',
                    },
                ],
                name: 'NewValue',
                type: 'event',
            } as any,
        },
    };

    it('create', () => {
        const expected: CreateAction = {
            type: CREATE,
            payload: itemWithId,
        };
        assert.isTrue(isCreateAction(expected));
        assert.deepEqual(create(item), expected);
    });

    it('update', () => {
        const expected: UpdateAction = {
            type: UPDATE,
            payload: itemWithId,
        };
        assert.isTrue(isUpdateAction(expected));
        assert.deepEqual(update(item), expected);
    });

    it('remove', () => {
        const expected: RemoveAction = {
            type: REMOVE,
            payload: id,
        };
        assert.isTrue(isRemoveAction(expected));
        assert.deepEqual(remove(id), expected);
    });
});
