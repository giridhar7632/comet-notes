import { useToast } from '@chakra-ui/react'
import { createContext, useContext, useEffect, useRef, useState } from 'react'
import { fetcher } from './fetcher'

// making custom hook to use context in each component
export const useAuth = () => useContext(AuthContext)

// creating context
export const AuthContext = createContext({})

// defining the Context provider
export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState({}) // state for tracking user
	const [isAuth, setIsAuth] = useState('') // state for tracking jwt token
	const [isLoading, setIsLoading] = useState(false)
	const toast = useToast()
	const toastIdRef = useRef()
	const addToast = (text, type) => {
		toastIdRef.current = toast({
			title: `${text}`,
			status: `${type}`,
			isClosable: true,
			duration: 3000,
		})
	}

	useEffect(() => {
		const token = localStorage.getItem('token')
		console.log('token: ', token)
		if (!(token === null || token === undefined)) {
			loginWithToken()
		}
		setIsLoading(false)
	}, [])

	function loginWithToken(token) {
		localStorage.setItem('token', token)
		setIsAuth(token)
		setUser({
			name: 'hello',
			msg: 'Logged in because token in localStorage',
		})
	}

	async function register(body) {
		setIsLoading(true)
		try {
			const { data: res } = await fetcher('/auth/register', { body })
			console.log(res)
			setUser(res.user)
			setIsAuth(res.token)
			addToast(res.msg, res.type)
		} catch (error) {
			error.response.data.msg
				? addToast(error.response.data.msg, error.response.data.type)
				: addToast('Something went wrong! 😕', 'error')
		}
		setIsLoading(false)
	}

	async function login(body) {
		setIsLoading(true)
		try {
			const { data: res } = await fetcher('/auth/login', { body })
			console.log(res)
			setUser(res.user)
			setIsAuth(res.token)
			addToast(res.msg, res.type)
		} catch (error) {
			error.response.data.msg
				? addToast(error.response.data.msg, error.response.data.type)
				: addToast('Something went wrong! 😕', 'error')
		}
		setIsLoading(false)
	}

	function logout() {
		setIsAuth('')
		setUser({})
		localStorage.removeItem('token')
	}

	return (
		<AuthContext.Provider
			value={{
				isAuth,
				user,
				register,
				login,
				logout,
				loginWithToken,
				isLoading,
			}}>
			{children}
		</AuthContext.Provider>
	)
}
