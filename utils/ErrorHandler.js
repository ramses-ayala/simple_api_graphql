import * as yup from 'yup'

export class ErrorHandler {

    static formatError(error) {
        if (!Array.isArray(error) && typeof(error) === 'object' && error instanceof yup.ValidationError) {
            console.log('ENTRO EN EL IF, error: ', error)
            return { data: { message: null, errors: error.errors } }
        }
    }
}