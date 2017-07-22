export function search(keywords) {
  return { type: 'SEARCH', keywords }
}

export function searchReducer(state = {}, action) {
  switch (action.type) {
    case 'SEARCH':
      return Object.assign({}, state, {
        search: action.keywords
      })
    default:
      return state
  }
}
