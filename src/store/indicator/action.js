// ************************** ACTIONS ************************** //
export const loading = (payload) => {
  return dispatch => {
    return dispatch({
      type: 'INDICATOR_SET',
      payload,
    })
  }
}
