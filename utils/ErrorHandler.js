import * as yup from 'yup'

export class ErrorHandler {

    static formatError(error) {

        if (!Array.isArray(error) && typeof(error) === 'object' && error instanceof yup.ValidationError) {
            console.log('ENTRO EN EL IF, error: ', error)
            return { data: { message: null }, success: false, httpCode: 422, errors: error.errors }
        } else {
            console.log('NO es un error de validación !!!')
        }
    }
}