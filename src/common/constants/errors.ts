export enum ErrorType {
  // Input/Request is malformed or invalid
  InvalidRequest = 'INVALID_REQUEST_ERROR',
  // Unexpected internal error
  ApiError = 'API_ERROR'
}

export enum ErrorCode {
  // Email or phone already used
  UserAlreadyExists = 'USER_ALREADY_EXISTS',
  // Wrong email or password
  CredentialsInvalid = 'CREDENTIALS_INVALID',
  // Verification code expired
  VerificationCodeExpired = 'VERIFICATION_CODE_EXPIRED',
  // Invalid request parameter
  ParameterInvalid = 'PARAMETER_INVALID',
  // Resource not found
  ResourceMissing = 'RESOURCE_MISSING',
  // Not enough permissions
  UnauthorizedAction = 'UNAUTHORIZED_ACTION'
}
