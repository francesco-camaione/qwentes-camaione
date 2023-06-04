import { Login } from "../../containers/Login"

export function LoginPage() {

	function concatenaArray<T, T2>(array1: T[], array2: T2[]): (T | T2)[] {
		return [...array1, ...array2]
	}

	const arr1 = [1, 2, 3]

	const arr2 = ["a", "b"]

	console.log(concatenaArray(arr1, arr2))

	type T1 = string

	class Contenitore<T extends T1> {
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

	console.log(findUnique([0, 0, 1, 2, 2, 3]))

	function genericF<A, B>(a: A, b: B): { a: A, b: B } {
		return { a, b }
	}

	function g<T>(par: Promise<T>): Promise<T> {
		return par.then((v) => v)
	}
	return <Login />
}
