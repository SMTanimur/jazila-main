import { HttpStatus } from '@nestjs/common'
import { ResponseType } from '../types/response.type'

type Source = 'success' | 'error'

export class ApiResponse<TData> {
  public readonly code: number

  public readonly message: string

  public readonly timestamp: number

  public readonly data: TData | null

  private constructor(code: number, message: string, data?: TData) {
    this.code = code
    this.message = message
    this.data = data || null
    this.timestamp = Date.now()
  }

  public static response<TData>(response: ResponseType<TData>, type: Source): ApiResponse<TData> {
    let resultCode: number
    let resultMessage: string

    if (type === 'success') {
      resultCode = response.code || HttpStatus.OK
      resultMessage = response.message || 'Success.'
    }

    if (type === 'error') {
      resultCode = response.code || HttpStatus.INTERNAL_SERVER_ERROR
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      resultMessage = response.message || 'Internal server error.'
    }

    return new ApiResponse(resultCode, resultMessage, response.data)
  }

  public static success<TData>(response: ResponseType<TData>): ApiResponse<TData> {
    return this.response(response, 'success')
  }

  public static error<TData>(response: ResponseType<TData>): ApiResponse<TData> {
    return this.response(response, 'error')
  }
}
