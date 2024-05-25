import { ReadonlyRequestCookies } from 'next/dist/server/web/spec-extension/adapters/request-cookies';
import { CustomFetchBaseResponse, CustomFetchRequestInit } from './interface';
import { deleteCookie, getCookie } from 'cookies-next';

export async function customFetch<T = CustomFetchBaseResponse>(
  service: 'admin' | 'bookshop' | 'identity',
  url: string,
  options: CustomFetchRequestInit = {},
  cookies?: () => ReadonlyRequestCookies,
): Promise<T> {
  const headers = { authorization: '', 'Content-Type': 'application/json' };
  const baseUrl = (
    service === 'admin'
      ? process.env.NEXT_PUBLIC_ADMIN_URL
      : service === 'bookshop'
      ? process.env.NEXT_PUBLIC_BOOKSHOP_URL
      : process.env.NEXT_PUBLIC_IDENTITY_URL
  ) as string;
  const fullUrl = new URL(url, baseUrl);

  if (options.isAuthorized) {
    const token = cookies
      ? getCookie('AT', { cookies }) // use server
      : getCookie('AT'); // use client
    headers['authorization'] = `Bearer ${token}`;
  }

  const rawResult = await fetch(fullUrl.toString(), {
    headers,
    ...options,
  });

  const result = await rawResult.json();

  if (result.message === 'Token expired') {
    deleteCookie('AT');
  }

  return result;
}

export function customFetchBody(body: object) {
  return JSON.stringify(body);
}
