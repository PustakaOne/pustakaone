export interface CustomFetchRequestInit extends RequestInit {
  isAuthorized?: boolean;
}

export interface CustomFetchBaseResponse {
  statusCode: number;
  message: string;
}
