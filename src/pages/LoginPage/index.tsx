import { Login } from "../../containers/Login"

export function LoginPage() {

	// typescript training below
	function concatenaArray<T, T2>(array1: T[], array2: T2[]): (T | T2)[] {
		return [...array1, ...array2]
	}

	const arr1 = [1, 2, 3]

	const arr2 = ["a", "b"]



	class Contenitore<T> {
		size: T
		height: number

		constructor(size: T, height: number) {
			this.size = size
			this.height = height
		}

		get() {
			return {
				size: this.size,
				height: this.height
			}
		}

		set(s: T, h: number): void {
			this.size = s
			this.height = h
			return;
		}

	}

	const contenitore1 = new Contenitore("grande", 1.8)


	function findUnique<A>(a: A[]): A[] {
		const uniqueArray: A[] = [...new Set(a)]
		return uniqueArray
	}


	function genericF<A, B>(a: A, b: B): { a: A, b: B } {
		return { a, b }
	}

	function g<T>(par: Promise<T>): Promise<T> {
		return par.then((v) => v)
	}

	const calculateSum = async (n: number, r: number): Promise<number> => {
		return n + r
	}

	const fetchData = async (url: string) => {
		new Promise((res, rej) => fetch(url, {
			method: "GET",
			headers: { "Content-Type": "application/json" },
		})
			.then(response => {
				if (response.ok) {
					res(response)
				} else {
					throw new Error("error")
				}
			}
			)
			.catch(err => rej(err))

		)
		return;
	}


	function filterArrayByType<T extends U, U>(arr: (T | U)[], t: U): U[] {
		const filteredArray: U[] = arr.filter((el) => {
			return typeof el === typeof t
		})
		return filteredArray
	}

	return <Login />
}
