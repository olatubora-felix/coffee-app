import { ACTION_TYPES } from './type'

export const storeReducer = (state, action) => {
    switch (action.type) {
        case ACTION_TYPES.SET_LAT_LONG: {
            return {
                ...state,
                latLong: action.payload.latLong,
            }
        }

        case ACTION_TYPES.SET_COFFEE_STORES: {
            return {
                ...state,
                coffeeStores: action.payload.coffeeStores,
            }
        }

        case ACTION_TYPES.SET_SEARCH_PLACES: {
            return {
                ...state,
                search: action.payload.search,
            }
        }

        default:
            throw new Error(`Unhandle action type: ${action.type}`)
    }
}
