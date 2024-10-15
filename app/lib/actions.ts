'use server'

import { z } from 'zod'

const FormSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  mobileNumber: z.string().min(1, 'Mobile number is required').regex(/^\d{10}$/, 'Invalid mobile number'),
})

export type State = {
  errors?: {
    name?: string[]
    mobileNumber?: string[]
  }
  message?: string | null
}

export async function submitForm(prevState: State, formData: FormData) {
  const validatedFields = FormSchema.safeParse({
    name: formData.get('name'),
    mobileNumber: formData.get('mobileNumber'),
  })

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Please fix the errors below.',
    }
  }

  // Here you would typically save the data to your database
  // For this example, we'll just return a success message
  return {
    message: 'Form submitted successfully!',
  }
}