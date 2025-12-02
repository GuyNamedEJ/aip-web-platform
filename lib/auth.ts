// Demo authentication system for students and professors

export type UserRole = "student" | "professor"

export interface User {
  id: string
  email: string
  name: string
  role: UserRole
  department?: string
}

// Demo credentials
export const demoUsers: Record<string, { password: string; user: User }> = {
  "student@bowiestate.edu": {
    password: "student123",
    user: {
      id: "student-001",
      email: "student@bowiestate.edu",
      name: "Alex Johnson",
      role: "student",
      department: "Computer Science",
    },
  },
  "professor@bowiestate.edu": {
    password: "professor123",
    user: {
      id: "professor-001",
      email: "professor@bowiestate.edu",
      name: "Dr. Sarah Williams",
      role: "professor",
      department: "Computer Science",
    },
  },
}

export function authenticateUser(email: string, password: string): User | null {
  const userEntry = demoUsers[email.toLowerCase()]
  if (userEntry && userEntry.password === password) {
    return userEntry.user
  }
  return null
}

export function getUserFromStorage(): User | null {
  if (typeof window === "undefined") return null
  const stored = localStorage.getItem("ttio_user")
  if (stored) {
    try {
      return JSON.parse(stored)
    } catch {
      return null
    }
  }
  return null
}

export function setUserToStorage(user: User): void {
  if (typeof window === "undefined") return
  localStorage.setItem("ttio_user", JSON.stringify(user))
}

export function clearUserFromStorage(): void {
  if (typeof window === "undefined") return
  localStorage.removeItem("ttio_user")
}
