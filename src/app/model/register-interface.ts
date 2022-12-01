enum role {
  user = 'user',
  operator = 'operator'
}

export interface RegisterInterface {
  email : string,
  password : string,
  role : string,
}
