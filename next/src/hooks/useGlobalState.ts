import useSWR from 'swr'

export const useUserState = () => {
  type userStateType = {
    id: number
    name: string
    email: string
    isSignedIn: boolean
    isFetched: boolean
  }

  const fallbackData: userStateType = {
    id: 0,
    name: '',
    email: '',
    isSignedIn: false,
    isFetched: false,
  }

  const { data: user, mutate: setUser } = useSWR('user', null, {
    fallbackData: fallbackData,
  })
  return [user, setUser] as [userStateType, (value: userStateType) => void]
}

export const useSnackbarState = () => {
  type snackbarStateType = {
    message: null | string
    severity: null | 'success' | 'error'
    pathname: null | string
  }

  const fallbackData: snackbarStateType = {
    message: null,
    severity: null,
    pathname: null,
  }
  const { data: snackbar, mutate: setSnackbar } = useSWR('snackbar', null, {
    fallbackData: fallbackData,
  })
  return [snackbar, setSnackbar] as [
    snackbarStateType,
    (value: snackbarStateType) => void,
  ]
}