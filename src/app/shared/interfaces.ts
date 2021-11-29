export interface RespuestatoHeadLines {
    meta: Meta
    response: Response
  }
  
  export interface Meta {
    code: number
  }
  
  export interface Response {
    holidays: Holiday[]
  }
  
  export interface Holiday {
    name: string
    description: string
    date: Date
    type: string[]
  }
  
  export interface Date {
    iso: string
    datetime: Datetime
  }
  
  export interface Datetime {
    year: number
    month: number
    day: number
  }