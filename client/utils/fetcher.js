const localStorageKey = 'token'

export async function fetcher(endpoint, { body, ...customConfig } = {}) {
	const token = window.localStorage.getItem(localStorageKey)
	const headers = { 'content-type': 'application/json' }
	if (token) {
		headers.Authorization = `Bearer ${token}`
	}
	const config = {
		method: body ? 'POST' : 'GET',
		...customConfig,
		headers: {
			...headers,
			...customConfig.headers,
		},
	}
	if (body) {
		config.body = JSON.stringify(body)
	}

	return window
		.fetch(`${process.env.NEXT_PUBLIC_API_URL}/${endpoint}`, config)
		.then(async (res) => {
			if (res.status === 401) {
				logout()
				window.location.assign(window.location)
				return
			}
			if (res.ok) {
				return await res.json()
			} else {
				const errorMessage = await res.text()
				return Promise.reject(new Error(errorMessage))
			}
		})
}

function logout() {
	window.localStorage.removeItem(localStorageKey)
}
